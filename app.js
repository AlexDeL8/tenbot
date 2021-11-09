'use strict';

// import express from 'express';
import { commonEmitter } from './common_emitter.js';
import { tenBot } from './loaders/tenbot_loader.js';
import './subscribers/command_handler.js'

// Instantiate emitter instance
const commonEmitter = new CommonEmitter();
//Bot connects to chat using config properties
tenBot.connect();
//TODO: Should tenBot become a singleton class to be shared/passed around?

console.log(commonEmitter);
commonEmitter.on('start', () => {
	console.log('commonEmitter: STARTED')
});

tenBot.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self || message[0] !== '!') return;
	
	let commandString = message.substr(1);
	let replyMessage = '[oop, something went wrong. Try again]';

	console.log('in APP.JS');
	commonEmitter.emit('commandSent', commandString, replyMessage);
	console.log(commonEmitter);
});

export { tenBot }
