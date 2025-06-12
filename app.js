const express = require('express');
const cors = require('cors');
const compression = require('compression');
const httpStatus = require('http-status');
const bodyParser = require('body-parser');
const { webConfig } = require('./config');
const apiAuth = require('./middlewares/api-auth');
const errorHandler = require('./middlewares/error-handler');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(compression());
app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/ping', (req, res) => res.sendStatus(200));
app.use('/api', apiAuth, routes);
app.use(errorHandler);

const server = app.listen(webConfig.port, () => console.info(`API running on port ${webConfig.port}.`));
server.keepAliveTimeout = 65000;
server.headersTimeout = 66000;

module.exports = {
  app,
};
