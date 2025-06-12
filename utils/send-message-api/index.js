const kluster = require('./kluster');
const { botConfig } = require('../../config');

const sendMessageApi = async (user, message, type, caption, mime) => {
  switch (botConfig.waProvider) {
    case 'KLUSTER':
      await kluster.sendMessageApi(user, message, type, caption, mime);
      break;
    default: break;
  }
};

module.exports = {
  sendMessageApi,
};
