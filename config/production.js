module.exports = {
  webConfig: {
    port: process.env.NODE_PORT,
  },
  botConfig: {
    botName: process.env.BOT_NAME,
    stateCode: process.env.STATE_CODE,
    medium: process.env.MEDIUM,
    waProvider: process.env.WA_PROVIDER,
  },
  klusterConfig: {
    botId: process.env.BOT_UUID,
    apiUrl: process.env.KLUSTER_API_URL,
    apiToken: process.env.KLUSTER_API_TOKEN,
    httpConfig: {
      maxSockets: 100,
      maxFreeSockets: 10,
      timeout: 60000,
      freeSocketTimeout: 30000,
    },
  },
};
