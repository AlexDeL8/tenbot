'use strict';

const tmi = require('tmi.js');

import { tenBot } from '../app.js';
import { genConfig, xboxApiConfig } from '../config/config.js';

//Use fetch()
export const getGamerscore = async function() {
    fetch(xboxApiConfig.basePath+'/'+xboxApiConfig.xuid+'/new-profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-AUTH': xboxApiConfig.xauth,
        }
    })
    .then(result => result.json())
    .then(jsonRes => jsonRes['gamerScore'])
    .catch(err => console.log(err))
}
