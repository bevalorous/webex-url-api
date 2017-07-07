"use strict";
const webExHostedWebsite = require("../../common").webExHostedWebsite;

module.exports = MeetingCenter;

function MeetingCenter(yourWebExHostedName) {
    webExHostedWebsite.apply(this, arguments);
    // set commands available to Meeting Center
}