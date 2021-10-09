const tmi = require('tmi.js');

const botConfig = (require('../config/config.js')).botConfig;
const xboxApiConfig = (require('../config/config.js')).xboxApiConfig;

const tenBot = new tmi.Client({
	options: { debug: botConfig.debug },
	connection: {
		secure: botConfig.secureConnection,
		reconnect: botConfig.reconnect
	},
	identity: {
		username: botConfig.bot_username,
		password: botConfig.bot_pass_oauth
	},
	channels: botConfig.channels
});

module.exports = {
    tenBot: tenBot
}