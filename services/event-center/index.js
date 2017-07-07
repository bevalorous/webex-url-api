"use strict";

const webExHostedWebsite = require("../../common").webExHostedWebsite;
var executeCommand = require("./common").executeCommand;

module.exports = EventCenter;

function EventCenter(yourWebExHostedName) {
    webExHostedWebsite.apply(this, arguments);

    // set commands available to EventCenter
    this.enrollEvent = enrollEvent;
    this.joinEvent = joinEvent;
}

/**
 * @param {object} params
 */
function enrollEvent(params) {
    return executeCommand("EN", params);
}

/**
 * @param {object} params
 */
function joinEvent(params) {
    return executeCommand("JE", params);
}
