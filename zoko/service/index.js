/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-catch */
/* eslint-disable no-fallthrough */
/* eslint-disable arrow-parens */

const { Text } = require('../../utils/message-types');

const klusterWebhook = async (userMobile, userMessage, messageType) => {
  const responseMessage = [];
  let userContext;
  try {
    responseMessage.push(new Text(userMessage));
    return responseMessage;
  } catch (e) {
    console.error({
      message: '[Zoko-Services] Error while sending response',
      userContext,
      userMobile,
      userMessage,
      messageType,
    });
    throw e;
  }
};

module.exports = {
  klusterWebhook,
};
