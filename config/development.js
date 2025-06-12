module.exports = {
  webConfig: {
    port: 3000,
  },
  botConfig: {
    botName: 'Animal Kingdom Bot',
    stateCode: 'FEATUREBOT',
    medium: 'EN',
    waProvider: 'KLUSTER',
  },
  klusterConfig: {
    botId: '0376239051105167',
    apiUrl: 'https://v1-test-kluster-api.cgslate.com/api',
    apiToken: 'bafe05a0-0169-40a0-9bef-ddee1c572e3d',
    httpConfig: {
      maxSockets: 100,
      maxFreeSockets: 10,
      timeout: 60000,
      freeSocketTimeout: 30000,
    },
  },
};
