'use strict'

import { tenBot } from '../tenbot.js';
import { commonEmitter } from '../common_emitter.js'

//Subscribe to '!command'
commonEmitter.on('commandSent', function(commandString, replyMessage, channel, tags) {
	switch(commandString) {
		case 'gamerscore':
			let gamerscore = 100;
			replyMessage = `@${tags['display-name']} , Nax\'s current Gamerscore: ${gamerscore}G`;
			
			break;
		case 'totalGames':
			let totalGames = 8;
			replyMessage = `@${tags['display-name']} , Nax\'s total games: ${totalGames}`;

			break
	}
	tenBot.say(channel, replyMessage);
});