
/**
 * Convert `str` of html to a string of js.
 *
 * @param {String} str
 * @return {String}
 * @api public
 */ 

module.exports = function(str){
  return "module.exports = '"
    + str
      .replace(/'/g, "\\'")
      .replace(/\r\n|\r|\n/g, "\\n")
    + "';";
};