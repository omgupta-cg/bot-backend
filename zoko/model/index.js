'use strict';

const async = require('async');
const { sendMessageApi } = require('../../utils/send-message-api');

// updated

const sendText = async (userMobile, message) => {
  console.debug(`Message: ${message.text}`);
  await sendMessageApi(userMobile, message, 'text');
};

const sendImage = async (userMobile, message) => {
  console.debug(`Message: Image link - ${message.url}`);
  await sendMessageApi(userMobile, message, 'image');
};

const sendImageId = async (userMobile, message) => {
  console.debug(`Message: Image link - ${message.url}`);
  await sendMessageApi(userMobile, message, 'image');
};

const sendDocument = async (userMobile, message) => {
  console.debug(`Message: Document link - ${message.url}`);
  console.debug(`Message: Document text - ${message.text}`);
  await sendMessageApi(userMobile, message, 'document');
};

const sendVideo = async (userMobile, message) => {
  console.debug(`Message: Video link - ${message.url}`);
  console.debug(`Message: Video text - ${message.text}`);
  await sendMessageApi(userMobile, message, 'video');
};

const sendVideoId = async (userMobile, message) => {
  console.debug(`Message: Video link - ${message.id}`);
  console.debug(`Message: Video text - ${message.text}`);
  await sendMessageApi(userMobile, message, 'video');
};

const sendContact = async (userMobile, message) => {
  console.debug(
    `Message: Contact phone - ${JSON.stringify(message.contact.phone)}`,
  );
  console.debug(
    `Message: Contact name - ${JSON.stringify(message.contact.name)}`,
  );
  console.debug(
    `Message: Contact company - ${JSON.stringify(message.contact.company)}`,
  );
  await sendMessageApi(userMobile, message, 'contact');
};

const sendButton = async (userMobile, message) => {
  await sendMessageApi(userMobile, message, 'card');
};

const sendCard = async (userMobile, message) => {
  await sendMessageApi(userMobile, message, 'button');
};

const sendArticle = async (userMobile, message) => {
  await sendMessageApi(userMobile, message, 'article');
};

const sendArticleButton = async (userMobile, message) => {
  await sendMessageApi(userMobile, message, 'article_button');
};

const sendMessage = async (userMobile, responseMessage) => {
  console.debug(`-------Message-------\nTo: ${userMobile}`);
  await async.eachSeries(responseMessage, async (message) => {
    switch (message.type) {
      case 'TEXT':
        await sendText(userMobile, message);
        break;
      case 'IMAGE':
        await sendImage(userMobile, message);
        break;
      case 'IMAGE_ID':
        await sendImageId(userMobile, message);
        break;
      case 'DOCUMENT':
        await sendDocument(userMobile, message);
        break;
      case 'VIDEO':
        await sendVideo(userMobile, message);
        break;
      case 'VIDEO_ID':
        await sendVideoId(userMobile, message);
        break;
      case 'CONTACT':
        await sendContact(userMobile, message);
        break;
      case 'BUTTON':
        await sendButton(userMobile, message);
        break;
      case 'CARD':
        await sendCard(userMobile, message);
        break;
      case 'ARTICLE':
        await sendArticle(userMobile, message);
        break;
      case 'ARTICLEBUTTON':
        await sendArticleButton(userMobile, message);
        break;
      default:
        break;
    }
  });
};

const constructError = async (err) => {
  const error = {
    message: err.message,
  };
  if (err.name) error.name = err.name;
  if (err.config) {
    error.request = {
      url: err.config.url,
      method: err.config.method,
    };
    if (err.config.method == 'get') {
      error.request.data = err.config.params;
    } else if (err.config.method == 'post') {
      error.request.data = err.config.data;
    }
  }
  if (err.response) {
    error.response = {
      status: err.response.status,
    };
    if (err.response.data) {
      error.response.data = err.response.data;
    }
  }
  return error;
};


module.exports = {
  sendMessage,
  constructError,
};
