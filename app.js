'use strict';

// import express from 'express';
import { commonEmitter } from './common_emitter.js';
import { tenBot } from './tenbot.js';
import './subscribers/command_handler.js';
import 'tmi.js';

tenBot.connect();

commonEmitter.on('start', () => {
	console.log('commonEmitter: STARTED');
});

tenBot.on('message', (channel, tags, message, self) => {
	// Ignore self messages or non-'!' messages
	if(self || message[0] !== '!') return;
	
	let commandString = message.substr(1);
	let replyMessage = '[oop, something went wrong. Try again]';

	commonEmitter.emit('commandSent', commandString, replyMessage, channel, tags);
});