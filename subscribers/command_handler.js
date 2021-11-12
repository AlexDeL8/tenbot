'use strict'

import { tenBot } from '../tenbot.js';
import { commonEmitter } from '../common_emitter.js'

//Subscribe to '!command'
commonEmitter.on('commandSent', function(commandString, replyMessage) {
    console.log('in COMMON_EMITTER ON()')
    
	switch(commandString) {
		case 'gamerscore':
			let gamerscore = 100;
			let replyMessage = `${tags['display-name']} , Nax\'s current Gamerscore: ${gamerscore}G`;

			tenBot.say(channel, replyMessage);
			break;
		default:
			tenBot.say(channel, replyMessage);
	}
});