'use strict';

const tenBot = require('./loaders/tenbotLoader.js').tenBot
//Bring in common/shared emitter
var events = require('events');
var commonEmitter = new events.EventEmitter();

//Bot connects to chat using config properties
tenBot.connect();

tenBot.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self || message[0] !== '!') return;
	
	let commandString = message.substr(1);
	let replyMessage = '[oop, something went wrong. Try again]';
	
	console.log('in APP.JS')
	commonEmitter.addListener('commandSent', function(commandString, replyMessage) {
		console.log(`commandSent with: ${commandString} ${replyMessage}`);
	})
	commonEmitter.emit('commandSent', commandString, replyMessage);
});

module.exports = { 
	tenBot: tenBot,
	commonEmitter: commonEmitter
}
