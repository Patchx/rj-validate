var rules_tests = require('./rules_functions.js');
var h = require('./helpers.js');

module.exports = [
	{
		rule_name: 'required',

		no_varname_msg: function(to_test, rules_arg) {
			return 'Required';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' is required';
		},


		test: function(to_test, rules_arg) {
			return rules_tests.required(to_test, rules_arg);
		},
	},

	{
		rule_name: 'same',

		no_varname_msg: function(to_test, rules_arg) {
			const name = rules_arg.same.name;
			return 'Must be the same as ' + name;
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			const name = rules_arg.same.name;
			return var_name + ' must be the same as ' + name;
		},


		test: function(to_test, rules_arg) {
			if (rules_arg.same === false) {
				return true;
			}

			if (!h.isObject(rules_arg.same)) {
				throw new Error("The same rule must be an object");
			}

			const value = rules_arg.same.value;

			return to_test === value;
		},
	},

	{
		rule_name: 'different',

		no_varname_msg: function(to_test, rules_arg) {
			const name = rules_arg.different.name;
			return 'Must not be the same as ' + name;
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			const name = rules_arg.different.name;
			return var_name + ' must not be the same as ' + name;
		},


		test: function(to_test, rules_arg) {
			if (rules_arg.different === false) {
				return true;
			}

			if (!h.isObject(rules_arg.different)) {
				throw new Error("The different rule must be an object");
			}

			const value = rules_arg.different.value;

			return to_test !== value;
		},
	},

	{
		rule_name: 'min',

		no_varname_msg: function(to_test, rules_arg) {
			var min_length = rules_arg.min;

			if (h.isNumber(to_test)) {
				return 'Must be ' + min_length + ' or larger';
			}

			return 'Must be ' + min_length + ' or longer';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			var min_length = rules_arg.min;

			if (h.isNumber(to_test)) {
				return var_name + ' must be ' + min_length + ' or larger';
			}

			return var_name + ' must be ' + min_length + ' or longer';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.min(to_test, rules_arg);
		}
	},

	{
		rule_name: 'max',

		no_varname_msg: function(to_test, rules_arg) {
			var max_length = rules_arg.max;

			if (h.isNumber(to_test)) {
				return 'Must be ' + max_length + ' or smaller';
			}

			return 'Must be ' + max_length + ' or shorter';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			var max_length = rules_arg.max;

			if (h.isNumber(to_test)) {
				return var_name + ' must be ' + max_length + ' or smaller';
			}

			return var_name + ' must be ' + max_length + ' or shorter';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.max(to_test, rules_arg);
		}
	},

	{
		rule_name: 'alpha',

		no_varname_msg: function(to_test, rules_arg) {
			return 'Please enter letters only';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' may only contain letters';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.alpha(to_test, rules_arg);
		}
	},

	{
		rule_name: 'alphanumeric',

		no_varname_msg: function(to_test, rules_arg) {
			return 'Please enter letters or numbers only';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' may only contain letters or numbers';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.alphanumeric(to_test, rules_arg);
		}
	},

	{
		rule_name: 'numeric',

		no_varname_msg: function(to_test, rules_arg) {
			return 'The input must be a number';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be a number';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.numeric(to_test, rules_arg);
		}
	},

	{
		rule_name: 'number',

		no_varname_msg: function(to_test, rules_arg) {
			return 'The input must be a number';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be a number';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.isNumber(to_test, rules_arg);
		}
	},

	{
		rule_name: 'string',

		no_varname_msg: function(to_test, rules_arg) {
			return 'The input must be a string';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be a string';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.isString(to_test, rules_arg);
		}
	},

	{
		rule_name: 'date',

		no_varname_msg: function(to_test, rules_arg) {
			return 'Please enter a valid date';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be a valid date';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.isDate(to_test, rules_arg);
		}
	},

	{
		rule_name: 'datetime',

		no_varname_msg: function(to_test, rules_arg) {
			return 'Please enter a valid date and time';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be a date and time';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.isDateTime(to_test, rules_arg);
		}
	},

	{
		rule_name: 'email',

		no_varname_msg: function(to_test, rules_arg) {
			return 'Please enter a valid email address';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be a valid email address';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.isEmail(to_test, rules_arg);
		}
	},

	{
		rule_name: 'po_box',

		no_varname_msg: function(to_test, rules_arg) {
			return 'Invalid P.O. Box';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be a P.O. Box';
		},

		test: function(to_test, rules_arg) {
			if (rules_arg.po_box === false) {
				return true;
			}

			return rules_tests.isPoBox(to_test, rules_arg);
		}
	},

	{
		rule_name: 'not_po_box',

		no_varname_msg: function(to_test, rules_arg) {
			return 'P.O. Box not allowed';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must not be a P.O. Box';
		},

		test: function(to_test, rules_arg) {
			if (rules_arg.not_po_box === false) {
				return true;
			}

			return !rules_tests.isPoBox(to_test, rules_arg);
		}
	},

	{
		rule_name: 'in',

		no_varname_msg: function(to_test, rules_arg) {
			return 'Please enter a valid option';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' is not a valid option';
		},

		test: function(to_test, rules_arg) {
			if (rules_arg.in === false) {
				return true;
			}

			return rules_tests.in(to_test, rules_arg);
		}
	},

	{
		rule_name: 'not_in',

		no_varname_msg: function(to_test, rules_arg) {
			return 'That option is not allowed';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' is not a valid option';
		},

		test: function(to_test, rules_arg) {
			if (rules_arg.not_in === false) {
				return true;
			}

			return rules_tests.notIn(to_test, rules_arg);
		}
	},

	{
		rule_name: 'before',

		no_varname_msg: function(to_test, rules_arg) {
			return 'Please enter a date prior to ' + rules_arg.before.toString();
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be prior to ' + rules_arg.before.toString();
		},

		test: function(to_test, rules_arg) {
			return rules_tests.before(to_test, rules_arg);
		}
	},

	{
		rule_name: 'before_or',

		no_varname_msg: function(to_test, rules_arg) {
			return 'Please enter a date on or prior to ' + rules_arg.before_or.toString();
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be on or prior to ' + rules_arg.before_or.toString();
		},

		test: function(to_test, rules_arg) {
			return rules_tests.beforeOr(to_test, rules_arg);
		}
	},

	{
		rule_name: 'after',

		no_varname_msg: function(to_test, rules_arg) {
			return 'Please enter a date after ' + rules_arg.after.toString();
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be after ' + rules_arg.after.toString();
		},

		test: function(to_test, rules_arg) {
			return rules_tests.after(to_test, rules_arg);
		}
	},

	{
		rule_name: 'after_or',

		no_varname_msg: function(to_test, rules_arg) {
			return 'Please enter a date on or after ' + rules_arg.after_or.toString();
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be on or after ' + rules_arg.after_or.toString();
		},

		test: function(to_test, rules_arg) {
			return rules_tests.afterOr(to_test, rules_arg);
		}
	},
];