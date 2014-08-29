
/**
 * Escape the given `str`
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function escape(str) {
  return str
      .replace(/'/g, "\\'")
      .replace(/\r\n|\r|\n/g, "\\n");
}

/**
 * Convert `str` to a module.exports string.
 *
 * @param {String|Object} str
 * @return {String}
 * @api public
 */

module.exports = function(str){
  var js = "";

  if (typeof str === "object") {
    Object.keys(str).forEach(function(key) {
      js += "exports['" + key + "'] = '" + escape(str[key]) + "';\n";
    });
  } else {
    js = "module.exports = '" + escape(str) + "';"
  }

  return js;
};
