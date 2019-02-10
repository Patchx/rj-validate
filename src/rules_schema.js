var rules_tests = require('./rules_functions.js');
var h = require('./helpers.js');

module.exports = [
	{
		rule_name: 'required',

		no_varname_msg: function(to_test, rules_arg) {
			return 'The input cannot be blank';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' cannot be blank';
		},


		test: function(to_test, rules_arg) {
			return rules_tests.required(to_test, rules_arg);
		},
	},

	{
		rule_name: 'min',

		no_varname_msg: function(to_test, rules_arg) {
			var min_length = rules_arg.min;

			if (h.isNumber(to_test)) {
				return 'The input must be ' + min_length + ' or larger';
			}

			return 'The input must be ' + min_length + ' or longer';
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
				return 'The input must be ' + max_length + ' or smaller';
			}

			return 'The input must be ' + max_length + ' or shorter';
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
];