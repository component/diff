var difflib = require('./difflib');

function diff(oldText, newText) {
  var sm = new difflib.SequenceMatcher(oldText, newText);
  return sm.get_opcodes();
}

// expose difflib
diff.lib = difflib;

module.exports = diff;
