'use strict'

import { tenBot } from '../tenbot.js';
import { commonEmitter } from '../common_emitter.js'

console.log('\nINSIDE HANDLER FILE\n')

//Subscribe to '!command'
commonEmitter.on('commandSent', function(commandString, replyMessage) {
    console.log('in COMMON_EMITTER ON()')
    
	switch(commandString) {
		case 'gamerscore':
			let gamerscore = 100;
			replyMessage = `${tags['display-name']} , Nax\'s current Gamerscore: ${gamerscore}G`;

			tenBot.say(channel, replyMessage);
			break;
		default:
			tenBot.say(channel, replyMessage);
	}
});