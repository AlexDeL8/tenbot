'use strict';

import { xboxApiConfig } from '../config/config.js'
import fetch from 'node-fetch';

class XboxAchievementService {
    constructor() {
        this.gamerscore = '';
    }

    async getGamerscore() {
        if(this.gamerscore !== '') {
            return this.gamerscore;
        } else {
            let profileInfoForXuidValue = await fetch(`${xboxApiConfig.basePath}${xboxApiConfig.xuid}/new-profile`, {
                method: 'GET',
                headers: {
                    'X-AUTH': xboxApiConfig.apiKey,
                    'Content-Type': 'application/json'
                }
            });
            
            let profileInfoForXuidJson = await profileInfoForXuidValue.json();
            this.gamerscore = this._formatNumber(profileInfoForXuidJson.gamerScore);
            return this.gamerscore;
        }
    }

    getTotalGames() {
        return '';
    }

    //Private
    _formatNumber(numberToFormat) {
        return numberToFormat.toLocaleString('en-US');
    }

    //Private
    _getXOneGames() {
        return '';
    }

    //Private
    _get360Games() {
        return '';
    }
}

export { XboxAchievementService };
