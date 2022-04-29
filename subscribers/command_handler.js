"use strict";

import { tenBot } from "../tenbot.js";
import { commonEmitter } from "../common_emitter.js";
import { XboxAchievementService } from "../services/xbox_achievement_service.js";

const xboxAchievementService = new XboxAchievementService();

//Subscribe to '!command'
commonEmitter.on(
    "commandSent",
    function (commandString, replyMessage, channel, tags) {
        switch (commandString) {
            case "gamerscore":
                xboxAchievementService
                    .getGamerscore()
                    .then((returnedGamerscore) => {
                        replyMessage = `@${tags["display-name"]} , Nax\'s current Gamerscore: ${returnedGamerscore}G`;
                        tenBot.say(channel, replyMessage);
                    })
                    .catch((err) =>
                        console.log(`ERROR - !gamerscore : ${err}`)
                    );

                break;
            case "currentGame":
                xboxAchievementService
                    .getCurrentGame()
                    .then((returnedCurrentGame) => {
                        replyMessage = `@${tags["display-name"]} , ${returnedCurrentGame.title} current stats: ${returnedCurrentGame.gamerscore}G -- ${returnedCurrentGame.achievements} achievements won -- ${returnedCurrentGame.completionPercent}% complete! PogChamp`;
                        tenBot.say(channel, replyMessage);
                    })
                    .catch((err) =>
                        console.log(`ERROR - !currentGame : ${err}`)
                    );

                break;
        }
    }
);
