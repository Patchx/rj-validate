// Todo:
// * need to allow users to pass custom failure messages in the rules_arg

// ----------------
// - Dependencies -
// ----------------

var rules = require('./rules.js');
var h = require('./helpers.js');

// ---------------------
// - Private Functions -
// ---------------------

function makeFailureMsg(var_name, failure_type) {
	if (failure_type === 'required') {
		if (var_name === '') {
			return 'The input cannot be blank';
		} else {
			return var_name + ' cannot be blank';
		}
	}
}

// ----------
// - Export -
// ----------

module.exports = {
	test: function(...args) {
		return this.validate(args);
	},

	validate: function(to_test, rules_arg, var_name='') {
		if (to_test === undefined || rules_arg === undefined) {
			throw new Error("Not enough arguments passed to function 'validate'");
		}

		if (!h.isObject(rules_arg)) {
			throw new Error("Rules must be an object");
		}

		if (!h.isNumber(to_test) && !h.isString(to_test)) {
			throw new Error("Invalid test parameter");
		}

		if (rules_arg.required !== undefined) {
			var result = rules.required(to_test);

			if (result === false) {
				return {
					valid: false,
					message: makeFailureMsg(var_name, 'required')
				};
			}
		}

		return {
			valid: true,
			message: 'all tests pass'
		};
	}
};