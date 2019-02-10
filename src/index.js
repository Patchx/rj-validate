// Todo:
// * Eventually, need to allow custom rules, by passing in an array of custom functions

// ----------------
// - Dependencies -
// ----------------

var rules_schema = require('./rules_schema.js');
var h = require('./helpers.js');

// ---------------------
// - Private Functions -
// ---------------------

function makeFailureMsg(inputs) {
	var msg_override = inputs.msg_override;

	if (msg_override !== undefined) {
		return msg_override;
	}

	var rule_obj = inputs.rule_obj;
	var var_name = inputs.var_name;
	var rules_arg = inputs.rules_arg;

	if (var_name === '') {
		return rule_obj.no_varname_msg(inputs.to_test, rules_arg);
	} else {
		return rule_obj.varname_msg(inputs.to_test, rules_arg, var_name);
	}
}

function validTestParam(test_param) {
	return h.isNumber(test_param) 
		   || h.isString(test_param) 
		   || test_param === null 
		   || test_param === undefined;
}

function validateInput(to_test, rules_arg, var_name='') {
	if (rules_arg === undefined) {
		throw new Error("Not enough arguments passed to function 'validate'");
	}

	if (!h.isObject(rules_arg)) {
		throw new Error("Rules must be an object");
	}

	if (!validTestParam(to_test)) {
		throw new Error("Invalid test parameter");
	}
	
	for (var i = 0; i < rules_schema.length; i++) {
		var rule_obj = rules_schema[i];
		var rule_name = rule_obj.rule_name;

		if (rules_arg[rule_name] !== undefined) {
			if (rule_obj.test(to_test, rules_arg) === false) {				
				return {
					valid: false,
					
					message: makeFailureMsg({
						to_test: to_test,
						rules_arg: rules_arg,
						rule_obj: rule_obj,
						var_name: var_name,
						msg_override: rules_arg[rule_name + '_msg'],
					}),
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
