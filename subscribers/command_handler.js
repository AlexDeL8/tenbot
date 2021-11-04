'use strict'

//using express figure out how to express.get() tenBot AND commonEmitter

const tenBot = req.tenBot
const commonEmitter = req.commonEmitter

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