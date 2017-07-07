"use strict";
const webExHostedWebsite = require("../../common").webExHostedWebsite;

module.exports = SupportCenter;

function SupportCenter(yourWebExHostedName) {
    webExHostedWebsite.apply(this, arguments);
    // set commands available to Support Center
}