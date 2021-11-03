'use strict'
//https://medium.com/developers-arena/nodejs-event-emitters-for-beginners-and-for-experts-591e3368fdd2
var tenBot = require('./loaders/tenbotLoader.js').tenBot;
// const emitter = require('../emitter.js');
// const commonEmitter = emitter.commonEmitter;
var app = require('../app.js');
var commonEmitter = app.commonEmitter;

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