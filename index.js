var diff_match_patch = require('./diff_match_patch');

/**
 * Calculates the diff between two strings and returns it
 * @param {String} oldText
 * @param {String} newText
 * @returns {Array}
 * @api public
 */

function diff(oldText, newText) {
  var dmp = new diff_match_patch();
  return dmp.diff_main(oldText, newText);
}

/**
 * Converts a diff object into a delta string, a very compact representation.
 * @param {Array} diff
 * @returns {String}
 * @api public
 */

diff.toDelta = function(diff) {
  var dmp = new diff_match_patch();
  return dmp.diff_toDelta(diff);
}

/**
 * Converts a delta string back into a diff. This requires the original text.
 * @param {String} oldText
 * @param {String} delta
 * @returns {Array}
 * @api public
 */

diff.fromDelta = function(oldText, delta) {
  var dmp = new diff_match_patch();
  return dmp.diff_fromDelta(oldText, delta);
}

module.exports = diff;
