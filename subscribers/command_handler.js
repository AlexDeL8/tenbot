'use strict'

//using express figure out how to express.get() tenBot AND commonEmitter
import { app } from '../app.js';

const tenBot = app.get('tenBot')
const commonEmitter = app.get('commonEmitter')

//Subscribe to '!command'
commonEmitter.on('commandSent', function(commandString, replyMessage) {
    console.log('in COMMAND_HANDLER.JS')
    
    if(commandString === 'gamerscore') {
		let gamerscore = 100
		replyMessage = `${tags['display-name']} , Nax\'s current Gamerscore: ${gamerscore}G`;
		
		tenBot.say(channel, replyMessage);
	} else {
		tenBot.say(channel, replyMessage);
	}
});