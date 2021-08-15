'use strict';

const fetch = require('node-fetch');
const http = require('http');
const tmi = require('tmi.js');

const tenBot = (require('../app.js')).tenBot;
const genConfig = require('../config/config.js').config;
const xboxApiConfig = (require('../config/config.js')).xboxApiConfig;

//Use fetch()
let getGamerscore = function() {
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

module.exports = {
    getGamerscore: getGamerscore
}