'use strict';

const tenBot = require('./loaders/tenbotLoader.js').tenBot

//Connect to chat
tenBot.connect();

tenBot.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	var replyMessage = '[Wh00ps, something went wrong. Try again]';
	if(message === '!gamerscore') {
		let gamerscore = 100
		replyMessage = tags['display-name']+' , Nax\'s current Gamerscore: ${gamerscore}G'
		
		tenBot.say(channel, replyMessage)
	}
});
