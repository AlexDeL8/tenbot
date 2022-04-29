"use strict";

import { xboxApiConfig } from "../config/config.js";
import fetch from "node-fetch";

class XboxAchievementService {
    constructor() {
        this.gamerscore = "";
        this.currentGameStats = "";

        this.cache = {
            gamerscore: "",
            games: {
                total: "",
                XOneGames: "",
                X360Games: "",
            },
        };
    }

    //Private
    _getCache(propertyName = "") {}

    //Private
    _updateCache(propertyName = "") {}

    async getGamerscore() {
        // if (this.gamerscore !== "") {
        //     return this.gamerscore;
        // } else {
        let profileInfoForXuidValue = await fetch(
            `${xboxApiConfig.basePath}${xboxApiConfig.xuid}/new-profile`,
            {
                method: "GET",
                headers: {
                    "X-AUTH": xboxApiConfig.apiKey,
                    "Content-Type": "application/json",
                },
            }
        );

        let profileInfoForXuidJson = await profileInfoForXuidValue.json();
        this.gamerscore = this._formatNumber(profileInfoForXuidJson.gamerScore);
        return this.gamerscore;
        // }
    }

    async getCurrentGame() {
        let profileCurrentGameStatsValue = await fetch(
            `${xboxApiConfig.basePath}${xboxApiConfig.xuid}/titlehub-achievement-list`,
            {
                method: "GET",
                headers: {
                    "X-AUTH": xboxApiConfig.apiKey,
                    "Content-Type": "application/json",
                },
            }
        );

        let profileCurrentGameStatsJson =
            await profileCurrentGameStatsValue.json();

        //Take first item, most recent TODO: Find way to trim call itself configuring fetch()?
        //NOTE: Possible expensive call to track
        let currentGameAchievementStats =
            profileCurrentGameStatsJson.titles[0].achievement;

        this.currentGameStats = {
            title: profileCurrentGameStatsJson.titles[0].name,
            achievements: currentGameAchievementStats.currentAchievements,
            gamerscore: this._formatNumber(
                currentGameAchievementStats.currentGamerscore
            ),
            completionPercent: currentGameAchievementStats.progressPercentage,
        };
        return this.currentGameStats;
    }

    //Private
    _formatNumber(numberToFormat) {
        return numberToFormat.toLocaleString("en-US");
    }

    //Private
    _getXOneGames() {
        return "";
    }

    //Private
    _get360Games() {
        return "";
    }
}

export { XboxAchievementService };
