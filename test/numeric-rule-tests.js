var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('Numeric rule on a number', () => {
	it('should return true for 0 and numeric of false', () => {
		var result = rules.numeric(0, {numeric: false});
		assert.equal(result, true);
	});

	it('should return true for 0 and numeric true', () => {
		var result = rules.numeric(0, {numeric: true});
		assert.equal(result, true);
	});

	it('should return false for 0 and numeric string', () => {
		var result = rules.numeric(0, {numeric: 'string'});
		assert.equal(result, false);
	});

	it('should return true for 0 and numeric number', () => {
		var result = rules.numeric(0, {numeric: 'number'});
		assert.equal(result, true);
	});
});

describe('Numeric rule on a string', () => {
	it('should return true for "" and an numeric of false', () => {
		var result = rules.numeric('', {numeric: false});
		assert.equal(result, true);
	});

	it('should return true for "abc123!@#" and an numeric of false', () => {
		var result = rules.numeric('abc123!@#', {numeric: false});
		assert.equal(result, true);
	});

	it('should return false for ""', () => {
		var result = rules.numeric('', {numeric: true});
		assert.equal(result, false);
	});

	it('should return false for "aBc"', () => {
		var result = rules.numeric('aBc', {numeric: true});
		assert.equal(result, false);
	});

	it('should return true for "123"', () => {
		var result = rules.numeric('123', {numeric: true});
		assert.equal(result, true);
	});

	it('should return false for "abc123"', () => {
		var result = rules.numeric('abc123', {numeric: true});
		assert.equal(result, false);
	});

	it('should return false for "Düsseldorf"', () => {
		var result = rules.numeric('Düsseldorf', {numeric: true});
		assert.equal(result, false);
	});

	it('should return true for "123" and numeric string', () => {
		var result = rules.numeric('123', {numeric: 'string'});
		assert.equal(result, true);
	});

	it('should return false for "123" and numeric number', () => {
		var result = rules.numeric('123', {numeric: 'number'});
		assert.equal(result, false);
	});
});
