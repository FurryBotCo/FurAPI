"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const furrybotapi_1 = __importDefault(require("furrybotapi"));
const e6api_1 = __importDefault(require("e6api"));
const e9api_1 = __importDefault(require("e9api"));
const foxapi_1 = __importDefault(require("foxapi"));
module.exports = {
    FurryBotAPI: furrybotapi_1.default,
    E6API: e6api_1.default,
    E9API: e9api_1.default,
    FoxAPI: foxapi_1.default /*,
    SheriAPI,
    InkBunnyAPI.
    ChewyBotAPI*/
};
