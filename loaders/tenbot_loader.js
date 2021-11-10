'use strict'

import tmi from 'tmi.js';

import { botConfig, xboxApiConfig } from '../config/config.js'; //xboxApiConfig to be used later

const tenBotClient = new tmi.Client({
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

export { tenBotClient }