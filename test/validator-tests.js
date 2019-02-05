var assert = require('chai').assert;
// var rj = require('../src/index.js');
var rj = require('../dist/main.js');

describe('Validator', () => {
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