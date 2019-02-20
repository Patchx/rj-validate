var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('Min rule on a number', () => {
	it('should return an error for 0 on a min of undefined', () => {
		assert.throw(
			() => {rules.min(0, {min: undefined})}, 
			Error, 
			"Min not set"
		);
	});

	it('should return an error for 0 on a min of null', () => {
		assert.throw(
			() => {rules.min(0, {min: null})}, 
			Error, 
			"Min not set"
		);
	});

	it('should return true for 0 and a min of 0', () => {
		var result = rules.min(0, {min: 0});
		assert.equal(result, true);
	});

	it('should return false for 0 and a min of 2', () => {
		var result = rules.min(0, {min: 2});
		assert.equal(result, false);
	});

	it('should return true for 3 and a min of 3', () => {
		var result = rules.min(3, {min: 3});
		assert.equal(result, true);
	});

	it('should return true for 10 and a min of 3', () => {
		var result = rules.min(10, {min: 3});
		assert.equal(result, true);
	});
});

describe('Min rule on a string', () => {
	it('should return true for "" on a min of false', () => {
		var result = rules.min('', {min: false});
		assert.equal(result, true);
	});

	it('should return an error for "" on a min of undefined', () => {
		assert.throw(
			() => {rules.min('', {min: undefined})}, 
			Error, 
			"Min not set"
		);
	});

	it('should return an error for "" on a min of null', () => {
		assert.throw(
			() => {rules.min('', {min: null})}, 
			Error, 
			"Min not set"
		);
	});

	it('should return true for "" and a min of 0', () => {
		var result = rules.min('', {min: 0});
		assert.equal(result, true);
	});

	it('should return false for "" and a min of 2', () => {
		var result = rules.min('', {min: 2});
		assert.equal(result, false);
	});

	it('should return true for "abc" and a min of 3', () => {
		var result = rules.min('abc', {min: 3});
		assert.equal(result, true);
	});

	it('should return true for "abc123" and a min of 3', () => {
		var result = rules.min('abc123', {min: 3});
		assert.equal(result, true);
	});
});
