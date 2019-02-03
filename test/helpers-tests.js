var assert = require('chai').assert;
var helpers = require('../src/helpers.js');

describe('isObject', () => {
	it('should return true for an empty object', () => {
		assert.isTrue(helpers.isObject({}));
	});

	it('should return false for an empty array', () => {
		assert.isFalse(helpers.isObject([]));
	});

	it('should return false if no argument passed', () => {
		assert.isFalse(helpers.isObject());
	});

	it('should return false if a number is passed', () => {
		assert.isFalse(helpers.isObject(1));
	});

	it('should return false if a function is passed', () => {
		assert.isFalse(helpers.isObject(function(){}));
	});
});