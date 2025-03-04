'use strict';

const tmi = require('tmi.js');
import { getGamerscore } from './services/xboxAchievementService.js'
import { genConfig, xboxApiConfig } from './config/config.js';

export const tenBot = new tmi.Client({
	options: { debug: genConfig.debug },
	connection: {
		secure: genConfig.secureConnection,
		reconnect: genConfig.reconnect
	},
	identity: {
		username: genConfig.bot_username,
		password: genConfig.bot_pass_oauth
	},
	channels: genConfig.channels
});

//Connect to chat
tenBot.connect();

//export the bot for use(?)
// module.exports = {
// 	tenBot: tenBot
// }

let endPoint = '/v2/gamertag/2533274812783903'
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
		let gamerscore = getGamerscore()
		replyMessage = tags['display-name']+' , Nax\'s current Gamerscore: '+gamerscore+'G'
		
		tenBot.say(channel, replyMessage)
	}
});
