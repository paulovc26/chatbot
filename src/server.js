"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var venom_bot_1 = require("venom-bot");
(0, venom_bot_1.create)({
    session: "testezap", // You can customize the session name
})
    .then(function (client) { return start(client); })
    .catch(function (error) { return console.log(error); });
function start(client) {
    client.onMessage(function (message) {
        if (message.body.toLowerCase() === "hello") {
            client.sendText(message.from, "Hi there! How can I help you today?");
        }
        else {
            client.sendText(message.from, "Sorry, I did not understand that.");
        }
    });
}
