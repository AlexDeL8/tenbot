'use strict'

//using express figure out how to express.get() tenBot AND commonEmitter
import { tenBot, /*app,*/ commonEmitter } from '../app.js';

// const emitter = commonEmitter;
console.log('INSIDE HANDLER FILE')
console.log(commonEmitter);

//Subscribe to '!command'
emitter.on('commandSent', function(commandString, replyMessage) {
    console.log('in COMMAND_HANDLER.JS')
    
    if(commandString === 'gamerscore') {
		let gamerscore = 100;
		replyMessage = `${tags['display-name']} , Nax\'s current Gamerscore: ${gamerscore}G`;
		
		tenBot.say(channel, replyMessage);
	} else {
		tenBot.say(channel, replyMessage);
	}
});