var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('Zip rule on a number', () => {
	it('should return true for 0 a zip rule of false', () => {
		var result = rules.zip(0, {zip: false});
		assert.equal(result, true);
	});

	it('should return false for 0', () => {
		var result = rules.zip(0, {zip: true});
		assert.equal(result, false);
	});

	it('should return true for 12345', () => {
		var result = rules.zip(12345, {zip: true});
		assert.equal(result, true);
	});
});

describe('Zip rule on a string', () => {
	it('should return true for "" and an zip of false', () => {
		var result = rules.zip('', {zip: false});
		assert.equal(result, true);
	});

	it('should return true for "12345"', () => {
		var result = rules.zip('12345', {zip: true});
		assert.equal(result, true);
	});

	it('should return true for "12345" and a rule of "usa-5"', () => {
		var result = rules.zip('12345', {zip: "usa-5"});
		assert.equal(result, true);
	});

	it('should return false for "12345" and a rule of "usa-9"', () => {
		var result = rules.zip('12345', {zip: "usa-9"});
		assert.equal(result, false);
	});

	it('should return false for "12345-1234" and a rule of "usa-5"', () => {
		var result = rules.zip('12345-1234', {zip: "usa-5"});
		assert.equal(result, false);
	});

	it('should return true for "12345-1234" and a rule of "usa-9"', () => {
		var result = rules.zip('12345-1234', {zip: "usa-9"});
		assert.equal(result, true);
	});

	it('should return false for "abc12" and a rule of "usa-5"', () => {
		var result = rules.zip('abc12', {zip: "usa-5"});
		assert.equal(result, false);
	});

	it('should return false for "abc123def" and a rule of "usa-9"', () => {
		var result = rules.zip('abc123def', {zip: "usa-9"});
		assert.equal(result, false);
	});

	it('should return false for "abc123def" and a rule of true', () => {
		var result = rules.zip('abc123def', {zip: true});
		assert.equal(result, false);
	});
});
