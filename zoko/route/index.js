const { Router } = require('express');
const controller = require('../controller');
const validate = require('../../middlewares/validator');
const schema = require('../schema');

const router = Router();

router.post(
  '/kluster-webhook',
  validate(schema.klusterWebhook),
  controller.klusterWebhook,
);
module.exports = router;
