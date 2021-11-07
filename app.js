'use strict';

import express from 'express';
import { EventEmitter } from 'events';
import { tenBot } from './loaders/tenbotLoader.js';

// Instantiate emitter instance
const commonEmitter = new EventEmitter();
// Add emitter to app using express
const app = express();
app.set('commonEmitter', commonEmitter);

//Bot connects to chat using config properties
tenBot.connect();
app.set('tenBot', tenBot);

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

export { tenBot, app }
