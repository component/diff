var diff_match_patch = require('./diff_match_patch');

function diff(oldText, newText) {
  var dmp = new diff_match_patch();
  return dmp.diff_main(oldText, newText);
}

module.exports = diff;
