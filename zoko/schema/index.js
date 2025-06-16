const Joi = require('joi');

module.exports = {
  klusterWebhook: Joi.object().keys({
    from: Joi.string().required(),
    timestamp: Joi.string().required(),
    message_id: Joi.string().required(),
    payload: Joi.string().max(1024).allow(null),
    type: Joi.string()
      .valid('text', 'button_response', 'multi_select_button_response', 'persistent_menu_response', 'user_session')
      .required(),
    text: Joi.when('type', {
      is: 'text',
      then: Joi.object({
        body: Joi.string().required(),
      }),
    }),
    button_response: Joi.when('type', {
      is: 'button_response',
      then: Joi.object({
        button_index: Joi.number().required(),
        body: Joi.string().required(),
      }),
    }),
    multi_select_button_response: Joi.when('type', {
      is: 'multi_select_button_response',
      then: Joi.array().items({
        button_index: Joi.number().required(),
        body: Joi.string().required(),
      }),
    }),
    persistent_menu_response: Joi.when('type', {
      is: 'persistent_menu_response',
      then: Joi.object({
        id: Joi.number().required(),
        body: Joi.string().required(),
      }),
    }),
    user_session: Joi.when('type', {
      is: 'user_session',
      then: Joi.object({
        payload: Joi.string().max(1024).allow(null),
      }).required(),
    }),
  }).required(),
};
