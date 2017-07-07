"use strict";

module.exports = {
    executeCommand: executeCommand,
    webExHostedWebsite: webExHostedWebsite,
};

/**
 * Execute specified command request to WebEx URL API.
 * @param {string} command
 * @param {object} params
 * @returns {Promise}
 */
function executeCommand(command, params) {
    setCommand(command, params);
    params = setParams(params);
    return apiRequest(params);
}

/**
 * Set "AT" parameter of params.
 * @param {string} command
 * @param {object} params
 */
function setCommand(command, params) {
    // here we process command
    params.AT = command;
}

/**
 * Process params of command.
 * @param {object} params
 */
function setParams(params) {
    // here we process params
    return params;
}

/**
 * Make API request to WebEx URL API with specified params.
 * @param params
 * @return {Promise}
 */
function apiRequest(params) {
    return Promise.resolve(params);
}


function webExHostedWebsite(yourWebExHostedName) {
    this.webExHostedName = yourWebExHostedName;
}