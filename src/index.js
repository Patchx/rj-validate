// ----------------
// - Dependencies -
// ----------------

// var rules = require('./rules.js');
var h = require('./helpers.js');

// ---------------------
// - Private Functions -
// ---------------------

// ----------
// - Export -
// ----------

module.exports = {
	validate: (to_test, rules_arg) => {
		if (to_test === undefined || rules_arg === undefined) {
			throw new Error("Not enough arguments passed to function 'validate'");
		}

		if (!h.isObject(rules_arg)) {
			throw new Error("Rules must be an object");
		}

		return 'test';
	}
};