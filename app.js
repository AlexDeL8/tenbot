'use strict';

const tenBot = require('./loaders/tenbotLoader.js').tenBot
//Bring in common/shared emitter
const emitter = require('./emitter');
const commonEmitter = emitter.commonEmitter;

//Bot connects to chat using config properties
tenBot.connect();

tenBot.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self || message[0] !== '!') return;
	
	let commandString = message.substr(1);
	let replyMessage = '[oop, something went wrong. Try again]';
	console.log('in APP.JS')

	commonEmitter.emit('commandSent', commandString, replyMessage);
});

module.exports = { tenBot: tenBot }
