"use strict";
const webExHostedWebsite = require("../../common").webExHostedWebsite;

module.exports = EventCenter;

function EventCenter(yourWebExHostedName) {
    webExHostedWebsite.apply(this, arguments);
    // set commands available to EventCenter
}