"use strict";
var executeCommand = require("./common").executeCommand;

module.exports = {
    enrollEvent: enrollEvent,
    joinEvent: joinEvent
};

/**
 * @param {object} params
 */
function enrollEvent(params) {
    return executeCommand("EN", params);
}

function joinEvent(params) {
    return executeCommand("JE", params);
}