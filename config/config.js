const genConfig = {
    bot_username: 'TENBot_sl',
    //bot_username: 'ENTER_BOT_USERNAME_HERE',
    bot_pass_oauth: 'oauth:56y8uzaaa7yyff7jsqo1e2lxsqqord',
    //bot_pass_oauth: 'ENTER_BOT_OAUTH_TOKEN_HERE',
    channels: ['#theelitenax'],
    //channels: ['#ENTER_YOUR_TWITCH_USERNAME_HERE_lowercase'],
    gamertag: 'The Elite Nax',
    //gamertag: 'ENTER_GAMERTAG_HERE',
    secureConnection: true, //recommended
    reconnect: true, //recommended
    debug: true //recommended
}

const xboxApiConfig = {
    xauth: '39018870991a6f1f2c6f531a7446b53c4b72d9b7',
    basePath: 'https://xapi.us/v2',
    profileId: '2533274812783903'
}

module.exports = {
    genConfig: genConfig,
    xboxApiConfig: xboxApiConfig
};