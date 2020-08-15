const tmi = require('tmi.js');
const config = (require('../conf/config.js')).config;

const client = new tmi.Client({
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
client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`);
	}
});