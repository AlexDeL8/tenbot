'use strict'

import { tenBot } from '../app.js';
import { commonEmitter } from '../common_emitter.js'

console.log('INSIDE HANDLER FILE')
console.log(commonEmitter);

//Subscribe to '!command'
commonEmitter.on('commandSent', function(commandString, replyMessage) {
    console.log('in COMMAND_HANDLER.JS')
    
    if(commandString === 'gamerscore') {
		let gamerscore = 100;
		replyMessage = `${tags['display-name']} , Nax\'s current Gamerscore: ${gamerscore}G`;
		
		tenBot.say(channel, replyMessage);
	} else {
		tenBot.say(channel, replyMessage);
	}
});