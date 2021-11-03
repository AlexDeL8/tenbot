'use strict'

const tenBot = require('./loaders/tenbotLoader.js').tenBot;
const emitter = require('../emitter.js');

// const commonEmitter = emitter.commonEmitter;

commonEmitter.on('commandSent', (commandString, replyMessage) => {
    console.log('in COMMAND_HANDLER.JS')
    
    if(commandString === 'gamerscore') {
		let gamerscore = 100
		replyMessage = `${tags['display-name']} , Nax\'s current Gamerscore: ${gamerscore}G`;
		
		tenBot.say(channel, replyMessage);
	} else {
		tenBot.say(channel, replyMessage);
	}
});