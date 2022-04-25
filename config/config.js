const botConfig = {
    bot_username: "TENBot_sl",
    //bot_username: 'BOT_USERNAME',
    bot_pass_oauth: process.env.BOT_OAUTH, //!
    //bot_pass_oauth: 'BOT_OAUTH_TOKEN',
    channels: ["#theelitenax"],
    //channels: ['#TWITCH_USERNAME_lowercase'],
    gamertag: "The Elite Nax",
    //gamertag: 'GAMERTAG',
    secureConnection: true, //recommended
    reconnect: true, //recommended
    debug: true, //recommended
};

const xboxApiConfig = {
    apiKey: process.env.XAPI_KEY,
    xauth: process.env.XAPI_XAUTH,
    basePath: "https://xapi.us/v2/",
    xuid: "2533274812783903",
};

export { botConfig, xboxApiConfig };
