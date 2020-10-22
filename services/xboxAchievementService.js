const tmi = require('tmi.js');
const http = require('http');

const tenBot = (require('../app.js').tenBot)
const xboxApiConfig = (require ('../config/config.js')).xboxApiConfig;

let endPoint = "/v2/xuid/The\ Elite\ Nax"
var options = {
    url: xboxApiConfig.host,
    path: endPoint,
    headers: {'X-AUTH': xboxApiConfig.xauth}
};

var request = http.request(options, function(response){
    var str = ''
    response.on('data', function (chunk) {
        str += chunk;
    });
  
    response.on('end', function () {
        tenBot.say(str);
    });
}).end();
