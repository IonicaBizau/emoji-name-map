const emoji = require("emojilib")
    , mapO = require("map-o")
    , iterateObject = require("iterate-object")
    ;

const nameMap = module.exports = {};
nameMap.emoji = mapO(emoji.lib, value => value.char, true);
iterateObject(nameMap.emoji, (value, name, obj) => !value && delete obj[name] || true);

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
