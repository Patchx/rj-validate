// For each function, returning 'true' means it passed validation

var h = require('./helpers.js');

module.exports = {
	max: function(to_test, rules_arg) {
		var max = rules_arg.max;

		if (max === undefined || max === null) {
			throw new Error('Max not set');
		}

		if (h.isNumber(to_test)) {
			return to_test <= max;
		}

		return to_test.length <= max;
	},

	min: function(to_test, rules_arg) {
		var min = rules_arg.min;

		if (min === undefined || min === null) {
			throw new Error('Min not set');
		}

		if (h.isNumber(to_test)) {
			return to_test >= min;
		}

		return to_test.length >= min;
	},

	required: function(to_test, rules_arg) {
		if (rules_arg.required === false) {
			return true;
		}

		if (to_test === null) {
			return false;
		}

		if (h.isString(to_test)) {
			return to_test.trim() !== '';
		}

		if (h.isNumber(to_test)) {
			return to_test > 0;
		}

		return false;
	}
};