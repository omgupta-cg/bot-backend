const service = require('../service');
const { environment, botConfig } = require('../../config');
const model = require('../model');

const klusterWebhook = async (req, res, next) => {
  try {
    if (environment !== 'development' && botConfig.deploymentPlatform === 'eb') res.sendStatus(200);
    const userMobile = req.body.from;
    console.info({
      userMobile,
      message: 'SwiftChat Message Received',
      requestBody: req.body,
    });
    let userMessage;
    let messageType = null;
    if (req.body.type === 'text') {
      userMessage = req.body.text.body;
      messageType = req.body.type;
    } else if (req.body.type === 'button_response') {
      userMessage = (req.body.button_response.button_index + 1).toString();
      messageType = req.body.type;
    } else if (req.body.type === 'persistent_menu_response') {
      userMessage = (req.body.persistent_menu_response.id - 1).toString();
      messageType = req.body.type;
    }
    const response = await service.klusterWebhook(
      userMobile,
      userMessage,
      messageType,
    );
    await model
      .sendMessage(userMobile, response)
      .catch(async (err) => {
        const constructedError = await model.constructError(err);
        console.error('Send Message Failure ', {
          userMobile,
          response,
          err: constructedError,
        });
      });
    if (environment !== 'development') res.sendStatus(200);
    if (!res.headersSent) res.status(200).json(response);
    // res.sendStatus(200);
  } catch (e) {
    console.error({
      userMobile: req.body.from,
      message: 'SwiftChat Webhook Error',
      requestBody: req.body,
      error: e,
    });
    return next(e);
  }
};

module.exports = {
  klusterWebhook,
};
