const config = {
    bot_username: "TENBot_sl",
    //bot_username: "ENTER_BOT_USERNAME_HERE",
    bot_pass_oauth: "oauth:56y8uzaaa7yyff7jsqo1e2lxsqqord",
    //bot_pass_oauth: "ENTER_BOT_OAUTH_TOKEN_HERE",
    channels: ["#theelitenax"],
    //channels: ["#ENTER_YOUR_TWITCH_USERNAME_HERE_lowercase"],
    gamertag: "The Elite Nax",
    //gamertag: "ENTER_GAMERTAG_HERE",
    secureConnection: true, //recommended
    reconnect: true, //recommended
    debug: true //recommended
}

const xboxApiConfig = {
    xauth: "97f14e0ab4b66a6dc3781959e63809e5ef6934ba",
    basePath: 'https://xapi.us/v2/'
}

module.exports = {
    config: config,
    xboxApiConfig: xboxApiConfig
};