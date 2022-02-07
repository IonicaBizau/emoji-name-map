"use strict";

var emojiDatasource = require('./datasource.json');

const nameMap = module.exports = {};
nameMap.emoji = emojiDatasource;

/**
 * get
 * Gets the emoji character (unicode) by providing the name.
 *
 * @name get
 * @function
 * @param {String} name The emoji name.
 * @return {String} The emoji character (unicode).
 */
nameMap.get = function (name) {
    if (name.charAt(0) === ":") {
        name = name.slice(1, -1)
    }
    return this.emoji[name];
};
