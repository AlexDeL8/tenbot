"use strict";

const http = require('http');
const tmi = require('tmi.js');
const xboxAchievementService = require('./services/xboxAchievementService.js');

const config = (require('./config/config.js')).config;
const xboxApiConfig = (require('./config/config.js')).xboxApiConfig;

const tenBot = new tmi.Client({
	options: { debug: config.debug },
	connection: {
		secure: config.secureConnection,
		reconnect: config.reconnect
	},
	identity: {
		username: config.bot_username,
		password: config.bot_pass_oauth
	},
	channels: config.channels
});

//Connect to chat
tenBot.connect();

//export the bot for use(?)
module.exports = {
	tenBot: tenBot
}

let endPoint = "/v2/gamertag/2533274812783903"
var options = {
    url: xboxApiConfig.host,
    path: endPoint,
    headers: {'X-AUTH': xboxApiConfig.xauth}
};

tenBot.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	var replyMessage = '[Wh00ps, something went wrong. Try again]';
	if(message === '!gamerscore') {
		let gamerscore = xboxAchievementService.getGamerscore().toString()
		replyMessage = tags["display-name"]+" , Nax's current Gamerscore: "+gamerscore+"G"
		
		tenBot.say(channel, replyMessage)
	}
});
