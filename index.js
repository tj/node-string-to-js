
/**
 * Convert `str` to a module.exports string.
 *
 * @param {String} str
 * @param {String} exp
 * @return {String}
 * @api public
 */ 

module.exports = function(str, exp){
  if (exp) {
    exp = 'var ' + exp;
  } else {
    exp = 'module.exports';
  }
  return exp + " = '"
    + str
      .replace(/'/g, "\\'")
      .replace(/\r\n|\r|\n/g, "\\n")
    + "';";
};
