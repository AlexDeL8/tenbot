'use strict'

import { tenBot } from './config/config.js';
import tmi from 'tmi.js'; 

class TenBot extends tmi {
    constructor() {
        super();
        if(TenBot.instance === null) {
            TenBot.connect();
            TenBot.instance = this;
        }
        return TenBot.instance;
    }

    sendMessage(chatMessage, channel = '#theelitenax') {
        return '';
    }

    snedEmit(eventName, ...args) {
        return ''
    }
}

const tenBot= new TenBot();
export { tenBot };