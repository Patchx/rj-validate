var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('Alphanumeric rule on a number', () => {
	it('should return true for 0 and alphanumeric of false', () => {
		var result = rules.alphanumeric(0, {alphanumeric: false});
		assert.equal(result, true);
	});

	it('should return false for 0', () => {
		var result = rules.alphanumeric(0, {alphanumeric: true});
		assert.equal(result, false);
	});

	it('should return false for 1', () => {
		var result = rules.alphanumeric(1, {alphanumeric: true});
		assert.equal(result, false);
	});
});

describe('Alphanumeric rule on a string', () => {
	it('should return true for "" and an alphanumeric of false', () => {
		var result = rules.alphanumeric('', {alphanumeric: false});
		assert.equal(result, true);
	});

	it('should return true for "abc123!@#" and an alphanumeric of false', () => {
		var result = rules.alphanumeric('abc123!@#', {alphanumeric: false});
		assert.equal(result, true);
	});

	it('should return true for ""', () => {
		var result = rules.alphanumeric('', {alphanumeric: true});
		assert.equal(result, true);
	});

	it('should return true for "aBc"', () => {
		var result = rules.alphanumeric('aBc', {alphanumeric: true});
		assert.equal(result, true);
	});

	it('should return true for "123"', () => {
		var result = rules.alphanumeric('123', {alphanumeric: true});
		assert.equal(result, true);
	});

	it('should return true for "abc123"', () => {
		var result = rules.alphanumeric('abc123', {alphanumeric: true});
		assert.equal(result, true);
	});

	it('should return true for "Düsseldorf"', () => {
		var result = rules.alphanumeric('Düsseldorf', {alphanumeric: true});
		assert.equal(result, true);
	});

	it('should return true for "321Düsseldorf"', () => {
		var result = rules.alphanumeric('321Düsseldorf', {alphanumeric: true});
		assert.equal(result, true);
	});

	it('should return false for "Düsseldorf!"', () => {
		var result = rules.alphanumeric('Düsseldorf!', {alphanumeric: true});
		assert.equal(result, false);
	});
});
