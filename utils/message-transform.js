const transformMessage = async (message) => {
  let transformedMessage;
  switch (message.type) {
    case 'MEDIA':
      transformedMessage = {
        type: 'document',
        document: { url: message.url, name: message.name, body: message.body },
      };
      break;
    case 'Media_Id':
      transformedMessage = {
        type: 'document',
        document: { id: message.id, name: message.name, body: message.body },
      };
      break;
    case 'TEXT':
      transformedMessage = {
        type: 'text',
        text: { body: message.text },
      };
      break;
    case 'IMAGE':
      transformedMessage = {
        type: 'image',
        image: { url: message.url },
      };
      break;
    case 'IMAGE_ID':
      transformedMessage = {
        type: 'image',
        image: { id: message.id, body: message.body },
      };
      break;
    case 'VIDEO':
      transformedMessage = {
        type: 'video',
        video: { url: message.url, title: message.title },
      };
      break;
    case 'VIDEO_ID':
      transformedMessage = {
        type: 'video',
        video: { id: message.id, title: message.title },
      };
      break;
    case 'CONTACT':
      transformedMessage = {
        type: 'contact',
        contact: message.contactData,
      };
      break;
    case 'BUTTON':
      transformedMessage = {
        type: 'button',
        button: {
          body: await transformMessage(message.body),
          buttons: message.buttons,
        },
      };
      break;
    case 'MULTISELECTBUTTON':
      transformedMessage = {
        type: 'multi_select_button',
        multi_select_button: {
          body: await transformMessage(message.body),
          buttons: message.buttons,
        },
      };
      break;
    case 'LOCATION':
      transformedMessage = {
        type: 'location',
        location: {
          longitude: message.longitude,
          latitude: message.latitude,
          name: message.name,
          address: message.address,
        },
      };
      break;
    case 'CARD':
      transformedMessage = {
        type: 'card',
        card: message.cardData,
      };
      break;
    case 'ARTICLE':
      transformedMessage = {
        type: 'article',
        article: message.articles,
      };
      break;
    case 'ARTICLEBUTTON':
      transformedMessage = {
        type: 'article',
        article: message.articleData,
      };
      break;
    default:
      break;
  }
  return transformedMessage;
};
module.exports = {
  transformMessage,
};
