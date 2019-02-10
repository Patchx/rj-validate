const assert = require('chai').assert;
const rj = require('../dist/main.js');

// Testing the 'required' rule extensively here to prove the integration. Other rules will be tested at the unit level

describe('validate() parameter checking', () => {
	it('should throw an error if no arguments included', () => {
		assert.throw(
			rj.validate, 
			Error, 
			"Not enough arguments passed to function 'validate'"
		);
	});

	it('should throw an error if only 1 argument included', () => {
		assert.throw(
			() => {rj.validate('test')}, 
			Error, 
			"Not enough arguments passed to function 'validate'"
		);
	});

	it('should throw an error if the rules argument is not an object', () => {
		assert.throw(
			() => {rj.validate('test', 'test')}, 
			Error, 
			"Rules must be an object"
		);
	});

	it('should throw an error if the value to test is an object', () => {
		assert.throw(
			() => {rj.validate({}, {})}, 
			Error, 
			"Invalid test parameter"
		);
	});

	it('should throw an error if the value to test is an array', () => {
		assert.throw(
			() => {rj.validate([], {})}, 
			Error, 
			"Invalid test parameter"
		);
	});

	it('should throw an error if the value to test is a function', () => {
		assert.throw(
			() => {rj.validate(function(){}, {})}, 
			Error, 
			"Invalid test parameter"
		);
	});
});

describe('validate() valid flag', () => {
	it('should return valid === true if required is set to false', () => {
		var output = rj.validate(undefined, {required: false});
		assert.equal(output.valid, true);
	});

	it('should return valid === false for required on undefined', () => {
		var output = rj.validate(undefined, {required: true});
		assert.equal(output.valid, false);
	});

	it('should return valid === false for required on undefined object property', () => {
		var output = rj.validate({}.foo, {required: true});
		assert.equal(output.valid, false);
	});

	it('should return valid === false for required on null', () => {
		var output = rj.validate(null, {required: true});
		assert.equal(output.valid, false);
	});

	it('should return valid === false for required on 0', () => {
		var output = rj.validate(0, {required: true});
		assert.equal(output.valid, false);
	});

	it('should return valid === true for required on 1', () => {
		var output = rj.validate(1, {required: true});
		assert.equal(output.valid, true);
	});

	it('should return valid === false for required on an empty string', () => {
		var output = rj.validate('', {required: true});
		assert.equal(output.valid, false);
	});

	it('should return valid === false for required on an empty string with a custom variable name', () => {
		var output = rj.validate('', {required: true}, 'first_name');
		assert.equal(output.valid, false);
	});

	it('should return valid === true for required on a non-empty string', () => {
		var output = rj.validate('abc123', {required: true});
		assert.equal(output.valid, true);
	});

	it('should return valid === true for required and a min of 2 on "foobar"', () => {
		var output = rj.validate('foobar', {
			required: true,
			min: 2,
		});
		
		assert.equal(output.valid, true);
	});

	it('should return valid === false for required and a min of 7 on "foobar"', () => {
		var output = rj.validate('foobar', {
			required: true,
			min: 7,
		});
		
		assert.equal(output.valid, false);
	});

	it('should return valid === false for required,  min of 2, and max of 5 on "foobar"', () => {
		var output = rj.validate('foobar', {
			required: true,
			min: 2,
			max: 5,
		});
		
		assert.equal(output.valid, false);
	});
});

describe('validate() output message', () => {
	it('should return the correct failure message for required on an empty string', () => {
		var expected_msg = 'The input cannot be blank';
		var actual_msg = rj.validate('', {required: true}).message;
		assert.equal(actual_msg, expected_msg);
	});

	it('should return the correct failure message for required on an empty string with a custom variable name', () => {
		var expected_msg = 'first_name cannot be blank';
		var actual_msg = rj.validate('', {required: true}, 'first_name').message;
		assert.equal(actual_msg, expected_msg);
	});

	it('should return the correct custom failure message for required on an empty string', () => {
		var expected_msg = 'This is a pretty weird validation message';
		
		var actual_msg = rj.validate('', {
			required: true,
			required_msg: 'This is a pretty weird validation message',
		}).message;
		
		assert.equal(actual_msg, expected_msg);
	});

	it('should return the correct custom failure message for required on an empty string with a custom variable name', () => {
		var expected_msg = 'This is a pretty weird validation message again';
		
		var output = rj.validate('', {
			required: true,
			required_msg: 'This is a pretty weird validation message again',
		}, 'first_name');

		var actual_msg = output.message;
		
		assert.equal(actual_msg, expected_msg);
	});

	it('should return the correct success message for required on a non-empty string', () => {
		var expected_msg = 'all tests pass';
		var actual_msg = rj.validate('abc123', {required: true}).message;
		assert.equal(actual_msg, expected_msg);
	});

	it('should return the correct error message for required and a min of 7 on "foobar"', () => {
		var output = rj.validate('foobar', {
			required: true,
			min: 7,
		});

		var expected_msg = 'The input must be 7 or longer';
		
		assert.equal(output.message, expected_msg);
	});

	it('should return the correct error message for required and a min of 7 on "foobar" with the variable name passed in', () => {
		var output = rj.validate('foobar', {
			required: true,
			min: 7,
		}, 'Profile name');

		var expected_msg = 'Profile name must be 7 or longer';
		
		assert.equal(output.message, expected_msg);
	});

	it('should return the correct error message for required and a min of 7 on "foobar" with a custom error message', () => {
		var output = rj.validate('foobar', {
			required: true,
			required_msg: 'Profile name is definitely required, yo',
			min: 7,
			min_msg: "Hold on, that profile name isn't long enough",
		});

		var expected_msg = "Hold on, that profile name isn't long enough";
		
		assert.equal(output.message, expected_msg);
	});

	it('should return the correct error message for required, a min of 2 and a max of 5 on "foobar"', () => {
		var output = rj.validate('foobar', {
			required: true,
			min: 2,
			max: 5,
		});

		var expected_msg = 'The input must be 5 or shorter';
		
		assert.equal(output.message, expected_msg);
	});

	it('should return the correct error message for required, a min of 7 and a max of 30 on "foobar"', () => {
		var output = rj.validate('foobar', {
			required: true,
			min: 7,
			max: 30,
		});

		var expected_msg = 'The input must be 7 or longer';
		
		assert.equal(output.message, expected_msg);
	});

	it('should return the correct error message for required, a min of 2 and a max of 5 on 6', () => {
		var output = rj.validate(6, {
			required: true,
			min: 2,
			max: 5,
		});

		var expected_msg = 'The input must be 5 or smaller';
		
		assert.equal(output.message, expected_msg);
	});

	it('should return the correct error message for required, a min of 7 and a max of 30 on 6', () => {
		var output = rj.validate(6, {
			required: true,
			min: 7,
			max: 30,
		});

		var expected_msg = 'The input must be 7 or larger';
		
		assert.equal(output.message, expected_msg);
	});
});

// Testing test() just to make sure it returns the same responses as validate()
// --
describe('test()', () => {
	it('should throw an error if no arguments included', () => {
		assert.throw(
			rj.test, 
			Error, 
			"Not enough arguments passed to function 'validate'"
		);
	});

	it('should throw an error if the value to test is an array', () => {
		assert.throw(
			() => {rj.test([], {})}, 
			Error, 
			"Invalid test parameter"
		);
	});

	it('should return valid === false for required on an empty string', () => {
		var output = rj.test('', {required: true});
		assert.equal(output.valid, false);
	});

	it('should return valid === false for required on an empty string with a custom variable name', () => {
		var output = rj.test('', {required: true}, 'first_name');
		assert.equal(output.valid, false);
	});

	it('should return the correct failure message for required on an empty string', () => {
		var expected_msg = 'The input cannot be blank';
		var actual_msg = rj.test('', {required: true}).message;
		assert.equal(actual_msg, expected_msg);
	});

	it('should return the correct failure message for required on an empty string with a custom variable name', () => {
		var expected_msg = 'first_name cannot be blank';
		var actual_msg = rj.test('', {required: true}, 'first_name').message;
		assert.equal(actual_msg, expected_msg);
	});

	it('should return valid === true for required on a non-empty string', () => {
		var output = rj.test('abc123', {required: true});
		assert.equal(output.valid, true);
	});

	it('should return the correct success message for required on a non-empty string', () => {
		var expected_msg = 'all tests pass';
		var actual_msg = rj.test('abc123', {required: true}).message;
		assert.equal(actual_msg, expected_msg);
	});
});
