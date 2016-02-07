const emoji = require("emojilib")
    , mapO = require("map-o")
    ;

const nameMap = module.exports = {};
nameMap.emoji = mapO(emoji.lib, (value, name) => {
    return value.char;
}, true);

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
    return this.emoji[name];
};

emoji = null;
