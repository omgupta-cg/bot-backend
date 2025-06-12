'use strict';

class Media {
  constructor(url, name, body) {
    this.type = 'MEDIA';
    this.url = url;
    this.name = name;
    this.body = body;
  }
}
class Media_Id {
  constructor(id, name, body) {
    this.type = 'Media_Id';
    this.id = id;
    this.name = name;
    this.body = body;
  }
}
class Text {
  constructor(text) {
    this.type = 'TEXT';
    this.text = text;
  }
}
class Image {
  constructor(url, body) {
    this.type = 'IMAGE';
    this.url = url;
    // this.body = body;
  }
}
class Image_Id {
  constructor(id, body) {
    this.type = 'IMAGE_ID';
    this.id = id;
    this.body = body;
  }
}

class Video {
  constructor(url, title) {
    this.type = 'VIDEO';
    this.url = url;
    this.title = title;
  }
}
class Video_Id {
  constructor(id, title) {
    this.type = 'VIDEO_ID';
    this.id = id;
    this.title = title;
  }
}

class Contact {
  constructor(contactData) {
    this.type = 'CONTACT';
    this.contactData = contactData;
  }
}

class Button {
  constructor(body, buttons) {
    this.type = 'BUTTON';
    this.body = body;
    this.buttons = buttons;
  }
}
class MultiSelectButton {
  constructor(body, buttons) {
    this.type = 'MULTISELECTBUTTON';
    this.body = body;
    this.buttons = buttons;
  }
}
class Card {
  constructor(cardData) {
    this.type = 'CARD';
    this.cardData = cardData;
  }
}
class Location {
  constructor(longitude, latitude, name, address) {
    this.type = 'LOCATION';
    this.longitude = longitude;
    this.latitude = latitude;
    this.name = name;
    this.address = address;
  }
}

class Article {
  /**
   * Creates an instance of Article.
   * @param {{header?: {type: 'image'| 'text', text: {body: string}, image: {body: string, url: string}}, title: string, description: string, tags: string[], actions: ActionButton[]}[]} articles
   * @param {ActionButton[]} actionButtons
   * @memberof Article
   */
  constructor(articles, actionButtons) {
    this.type = 'ARTICLE';
    this.articles = articles.map((article) => {
      article.description;
      // article.tags = [article.tags[0].substring(0, 20)];
      article.title;
      if (article.actions) {
        article.actions = article.actions.map(button => ({
          type: button.type,
          button_text: truncate(button.buttonText, { length: 100 }),
          website: button.website,
        }));
        return article;
      }
      return article;
    });
  }
  /**
   * @typedef {Object} ActionButton
   * @property {string} type
   * @property {string} buttonText
   * @property {Object} website
   * @property {string} website.title
   * @property {string} website.payload
   * @property {string} website.url
   */

  /**
   * return action button object
   * @param {string} buttonText
   * @param {string} title
   * @param {string} payload
   * @param {string} url
   * @returns {ActionButton} action button object
   */
  static makeActionButton(buttonText, url, title, payload) {
    return {
      type: 'website',
      buttonText,
      website: {
        title,
        payload,
        url,
      },
    };
  }
}

class ArticleButton {
  constructor(articleData) {
    this.type = 'ARTICLEBUTTON';
    this.articleData = articleData;
  }
}

module.exports = {
  Media,
  Media_Id,
  Text,
  Image,
  Image_Id,
  Video,
  Video_Id,
  Contact,
  Button,
  MultiSelectButton,
  Card,
  Location,
  Article,
  ArticleButton,
};
