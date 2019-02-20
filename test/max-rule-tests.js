var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('Max rule on a number', () => {
	it('should return an error for 0 on a max of undefined', () => {
		assert.throw(
			() => {rules.max(0, {max: undefined})}, 
			Error, 
			"Max not set"
		);
	});

	it('should return an error for 0 on a max of null', () => {
		assert.throw(
			() => {rules.max(0, {max: null})}, 
			Error, 
			"Max not set"
		);
	});

	it('should return true for 0 and a max of 0', () => {
		var result = rules.max(0, {max: 0});
		assert.equal(result, true);
	});

	it('should return false for 2 and a max of 0', () => {
		var result = rules.max(2, {max: 0});
		assert.equal(result, false);
	});

	it('should return true for 3 and a max of 3', () => {
		var result = rules.max(3, {max: 3});
		assert.equal(result, true);
	});

	it('should return true for 3 and a max of 10', () => {
		var result = rules.max(3, {max: 10});
		assert.equal(result, true);
	});
});

describe('Max rule on a string', () => {
	it('should return true for "" on a max of false', () => {
		var result = rules.max('', {max: false});
		assert.equal(result, true);
	});

	it('should return an error for "" on a max of undefined', () => {
		assert.throw(
			() => {rules.max('', {max: undefined})}, 
			Error, 
			"Max not set"
		);
	});

	it('should return an error for "" on a max of null', () => {
		assert.throw(
			() => {rules.max('', {max: null})}, 
			Error, 
			"Max not set"
		);
	});

	it('should return true for "" and a max of 0', () => {
		var result = rules.max('', {max: 0});
		assert.equal(result, true);
	});

	it('should return false for "ab" and a max of 0', () => {
		var result = rules.max('ab', {max: 0});
		assert.equal(result, false);
	});

	it('should return true for "abc" and a max of 3', () => {
		var result = rules.max('abc', {max: 3});
		assert.equal(result, true);
	});

	it('should return true for "abc" and a max of 6', () => {
		var result = rules.max('abc', {max: 6});
		assert.equal(result, true);
	});
});
