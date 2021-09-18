// Code to convert time unit to milisecond
const moment = require("moment");

function getNow() {
    return moment().valueOf();
}

module.exports = { getNow };
