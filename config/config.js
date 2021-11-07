const botConfig = {
    bot_username: 'TENBot_sl',
    //bot_username: 'BOT_USERNAME',
    bot_pass_oauth: 'oauth:56y8uzaaa7yyff7jsqo1e2lxsqqord',
    //bot_pass_oauth: 'BOT_OAUTH_TOKEN',
    channels: ['#theelitenax'],
    //channels: ['#TWITCH_USERNAME_lowercase'],
    gamertag: 'The Elite Nax',
    //gamertag: 'GAMERTAG',
    secureConnection: true, //recommended
    reconnect: true, //recommended
    debug: true //recommended
}

const xboxApiConfig = {
    xauth: 'ea31a2db4b3917b550785877ed4cffa59070363d',
    basePath: 'https://xapi.us/v2',
    xuid: '2533274812783903'
}

export { botConfig, xboxApiConfig };