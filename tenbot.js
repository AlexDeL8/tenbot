'use strict'

import { tenBotClient } from './config/config.js';
import tmi from 'tmi.js'; 

class TenBot extends tmi {
    constructor() {
        super();
        if(TenBot.instance === null) {
            TenBot.client = tenBotClient.connect();
            TenBot.instance = this;
        }
        return TenBot.instance;
    }

    sendMessage(chatMessage, channel = '#theelitenax') {
        this.client.say(channel, chatMessage);
    }
}

const tenBot = new TenBot();
export { tenBot };