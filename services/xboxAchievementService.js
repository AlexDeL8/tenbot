'use strict';

const http = require('http');
const tmi = require('tmi.js');

const tenBot = (require('../app.js')).tenBot;
const genConfig = require('../config/config.js').config;
const xboxApiConfig = (require('../config/config.js')).xboxApiConfig;

//Use fetch()
let getGamerscore = function() {
    fetch(xboxApiConfig.basePath+'/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            '-X': xboxApiConfig.xauth,
        }
    }).then(result => {
        console.log('SUCCESS');
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
    
    return 100000
}

module.exports = {
    getGamerscore: getGamerscore
}