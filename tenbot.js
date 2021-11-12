'use strict'

import { tenBotClient } from './loaders/tenbot_loader.js';

class TenBot {
    constructor() {
        if(TenBot.instance instanceof TenBot) {
            TenBot.instance = this;
            console.log(tenBotClient)
            this.client = tenBotClient;
        }
        return TenBot.instance;
    }

    sendMessage(chatMessage, channel = '#theelitenax') {
        this.say(channel, chatMessage);
    }
}

const tenBot = new TenBot();

console.log('IN TENBOT.JS');
console.log(tenBot.client);

export { tenBot };