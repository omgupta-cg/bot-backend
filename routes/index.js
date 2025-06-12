'use strict';

const { Router } = require('express');

const zokoRouter = require('../zoko/route');
const router = Router();

router.use(zokoRouter);

module.exports = router;
