'use strict';

import { xboxApiConfig } from '../config/config.js'

class XboxAchievementService {
    constructor() {
        console.log('XboxAchievementService CREATED');
        
        let profileInfoForXuidValue = async function() {
                await fetch(`${xboxApiConfig.basePath}${xboxApiConfig.xuid}/new-profile`, {
                    method: 'GET',
                    headers: {
                        'X-AUTH': xboxApiConfig.apiKey,
                        'Content-Type': 'application/json'
                    }
                })
            }();
        let profileInfoForXuidJson = async function() { 
            await profileInfoForXuidValue.json(); 
        }();

        console.log(profileInfoForXuidJson);
        this.gamerscore = profileInfoForXuidJson.gamerScore;
    }

    getGamerscore() {
        return this.gamerscore;
    }

    //Private
    _getXOneGames() {
        return ''
    }

    //Private
    _get360Games() {
        return ''
    }

    getTotalGames() {
        return ''
    }
}

export { XboxAchievementService };
