"use strict";

const http = require('http');
const tmi = require('tmi.js');

const tenBot = (require('../app.js')).tenBot;
const xboxApiConfig = (require('../config/config.js')).xboxApiConfig;

//Use fetch()
let getGamerscore = function() {
    return 100000
}

module.exports = {
    getGamerscore: getGamerscore
}