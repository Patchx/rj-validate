// Todo:
// * Eventually, need to allow custom rules, by passing in an array of custom functions

// ----------------
// - Dependencies -
// ----------------

var rules_tests = require('./rules_functions.js');
var h = require('./helpers.js');

// ---------------------
// - Private Functions -
// ---------------------

function getPriorityList() {
	return [
		'required',
	];
}

function makeFailureMsg(var_name, failure_type, failure_msg_override=undefined) {
	if (failure_msg_override !== undefined) {
		return failure_msg_override;
	}

	if (failure_type === 'required') {
		if (var_name === '') {
			return 'The input cannot be blank';
		} else {
			return var_name + ' cannot be blank';
		}
	}

	throw new Error("Could not find the correct failure message");
}

function validateInput(to_test, rules_arg, var_name='') {
	if (to_test === undefined || rules_arg === undefined) {
		throw new Error("Not enough arguments passed to function 'validate'");
	}

	if (!h.isObject(rules_arg)) {
		throw new Error("Rules must be an object");
	}

	if (!h.isNumber(to_test) && !h.isString(to_test)) {
		throw new Error("Invalid test parameter");
	}

	const priority_list = getPriorityList();

	for (var i = 0; i < priority_list.length; i++) {
		var rule_name = priority_list[i];

		if (rules_arg[rule_name] !== undefined) {
			var result = rules_tests[rule_name](to_test);

			if (result === false) {
				return {
					valid: false,
					message: makeFailureMsg(var_name, rule_name, rules_arg[rule_name + '_msg'])
				};
			}
		}
	}

	return {
		valid: true,
		message: 'all tests pass'
	};
}

// ----------
// - Export -
// ----------

module.exports = {
	test: function(to_test, rules_arg, var_name='') {
		return validateInput(to_test, rules_arg, var_name);
	},

	validate: function(to_test, rules_arg, var_name='') {
		return validateInput(to_test, rules_arg, var_name);
	}
};
