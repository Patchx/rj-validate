
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

function testCustomRules(to_test, custom_rules) {
	if (custom_rules === false) {
		return {
			valid: true, 
			message: 'all tests pass'
		};
	}

	if (!h.isArray(custom_rules)) {
		throw new Error("Custom rules must be an array");
	}

	for (var i = 0; i < custom_rules.length; i++) {
		var custom_rule = custom_rules[i];

		if (!custom_rule.test(to_test)) {
			return {
				valid: false,
				message: custom_rule.error_msg
			};
		}
	}

	return {
		valid: true, 
		message: 'all tests pass'
	};
}

function validTestParam(test_param) {
	return h.isNumber(test_param) 
		   || h.isString(test_param) 
		   || h.isBoolean(test_param)
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

	if (to_test === '' && rules_arg.required !== true) {
		return {valid: true, message: 'all tests pass'};
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

	if (rules_arg.custom !== undefined) {
		var custom_result = testCustomRules(to_test, rules_arg.custom);

		if (!custom_result.valid) {
			return custom_result;
		}
	}

	return {valid: true, message: 'all tests pass'};
}

// ----------
// - Export -
// ----------

var rj = function() {
	return {
		isValid: function(to_test, rules_arg, var_name='') {
			return validateInput(to_test, rules_arg, var_name).valid;
		},

		test: function(to_test, rules_arg, var_name='') {
			return validateInput(to_test, rules_arg, var_name);
		},

		validate: function(to_test, rules_arg, var_name='') {
			return validateInput(to_test, rules_arg, var_name);
		},

		validateAll: function(request) {
			if (!h.isArray(request)) {
				throw new Error("Input to validateAll() must be an array");
			}

			var output = {valid: true};

			for (var i = 0; i < request.length; i++) {
				const item = request[i];
				var result = validateInput(item.value, item.rules, item.name);
				output[item.name] = result;
				output.valid = output.valid && result.valid;
			}

			return output;
		}
	};
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = rj;
} else {
	window.rj = rj;
}
