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

	{
		rule_name: 'alpha',

		no_varname_msg: function(to_test, rules_arg) {
			return 'The input may only contain letters';
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
			return 'The input may only contain letters or numbers';
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
			return 'The input must be a date';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be a date';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.isDate(to_test, rules_arg);
		}
	},

	{
		rule_name: 'datetime',

		no_varname_msg: function(to_test, rules_arg) {
			return 'The input must be a datetime';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be a datetime';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.isDateTime(to_test, rules_arg);
		}
	},

	{
		rule_name: 'email',

		no_varname_msg: function(to_test, rules_arg) {
			return 'The input must be an email address';
		},

		varname_msg: function(to_test, rules_arg, var_name) {
			return var_name + ' must be an email address';
		},

		test: function(to_test, rules_arg) {
			return rules_tests.isEmail(to_test, rules_arg);
		}
	},

	{
		rule_name: 'po_box',

		no_varname_msg: function(to_test, rules_arg) {
			return 'The input must be a P.O. Box';
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
			return 'The input must not be a P.O. Box';
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
];