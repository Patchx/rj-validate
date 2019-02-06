const assert = require('chai').assert;
const rj = require('../dist/main.js');

describe('validate()', () => {
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

	it('should return valid === false for required on an empty string', () => {
		var output = rj.validate('', {required: true});
		assert.equal(output.valid, false);
	});

	it('should return valid === false for required on an empty string with a custom variable name', () => {
		var output = rj.validate('', {required: true}, 'first_name');
		assert.equal(output.valid, false);
	});

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

	it('should return valid === true for required on a non-empty string', () => {
		var output = rj.validate('abc123', {required: true});
		assert.equal(output.valid, true);
	});

	it('should return the correct success message for required on a non-empty string', () => {
		var expected_msg = 'all tests pass';
		var actual_msg = rj.validate('abc123', {required: true}).message;
		assert.equal(actual_msg, expected_msg);
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
