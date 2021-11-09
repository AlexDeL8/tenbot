'use strict';

// import express from 'express';
import { EventEmitter } from 'events';
import { tenBot } from './loaders/tenbot_loader.js';
import './subscribers/command_handler.js'

// Instantiate emitter instance
const commonEmitter = new EventEmitter();
// Add emitter to app using express
// const app = express();
// app.set('commonEmitter', commonEmitter);

//Bot connects to chat using config properties
tenBot.connect();
// app.set('tenBot', tenBot);

tenBot.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self || message[0] !== '!') return;
	
	let commandString = message.substr(1);
	let replyMessage = '[oop, something went wrong. Try again]';

	console.log('in APP.JS')
	commonEmitter.emit('commandSent', commandString, replyMessage);
	console.log(commonEmitter)
});

export { tenBot, /*app,*/ commonEmitter }
