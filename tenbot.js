"use strict";

import { tenBotClient } from "./loaders/tenbot_loader.js";

class TenBot {
    constructor() {
        if (TenBot.instance instanceof TenBot) {
            TenBot.instance = this;
        }
        TenBot.instance = tenBotClient;
        return TenBot.instance;
    }
}

const tenBot = new TenBot();
export { tenBot };
