var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('Alpha rule on a number', () => {
	it('should return true for 0 an alpha of false', () => {
		var result = rules.alpha(0, {alpha: false});
		assert.equal(result, true);
	});

	it('should return false for 0', () => {
		var result = rules.alpha(0, {alpha: true});
		assert.equal(result, false);
	});

	it('should return false for 1', () => {
		var result = rules.alpha(1, {alpha: true});
		assert.equal(result, false);
	});
});

describe('Alpha rule on a string', () => {
	it('should return true for "" and an alpha of false', () => {
		var result = rules.alpha('', {alpha: false});
		assert.equal(result, true);
	});

	it('should return true for "abc123!@#" and an alpha of false', () => {
		var result = rules.alpha('abc123!@#', {alpha: false});
		assert.equal(result, true);
	});

	it('should return true for ""', () => {
		var result = rules.alpha('', {alpha: true});
		assert.equal(result, true);
	});

	it('should return true for "abc"', () => {
		var result = rules.alpha('abc', {alpha: true});
		assert.equal(result, true);
	});

	it('should return false for "123"', () => {
		var result = rules.alpha('123', {alpha: true});
		assert.equal(result, false);
	});

	it('should return false for "abc123"', () => {
		var result = rules.alpha('abc123', {alpha: true});
		assert.equal(result, false);
	});

	it('should return true for "Düsseldorf"', () => {
		var result = rules.alpha('Düsseldorf', {alpha: true});
		assert.equal(result, true);
	});

	it('should return false for "321Düsseldorf"', () => {
		var result = rules.alpha('321Düsseldorf', {alpha: true});
		assert.equal(result, false);
	});

	it('should return false for "Düsseldorf!"', () => {
		var result = rules.alpha('Düsseldorf!', {alpha: true});
		assert.equal(result, false);
	});
});
