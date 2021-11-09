'use strict'

import tmi from 'tmi.js';

import { botConfig } from '../config/config.js';
import { xboxApiConfig } from '../config/config.js'; //To be used later

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