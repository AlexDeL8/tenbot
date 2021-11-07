const tmi = require('tmi.cjs');

import { botConfig } from '../config/config.js';
import { xboxApiConfig } from '../config/config.js';

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

export { tenBot }