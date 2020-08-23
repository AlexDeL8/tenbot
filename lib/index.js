const tmi = require('tmi.js');
const config = (require('../conf/config.js')).config;

const tenBot = new tmi.Client({
	options: { debug: config.debug },
	connection: {
		secure: config.secureConnection,
		reconnect: config.reconnect
	},
	identity: {
		username: config.bot_username,
		password: config.bot_pass_oauth
	},
	channels: config.channels
});

//Connect to chat
tenBot.connect();


tenBot.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.substring(0,1)) {
		tenBot.say(channel, `@${tags.username}, hey!`);
	}
});