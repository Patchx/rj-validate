var assert = require('chai').assert;
var helpers = require('../src/helpers.js');

describe('isNumber', () => {
	it('should return false for an empty object', () => {
		assert.isFalse(helpers.isNumber({}));
	});

	it('should return false for an object', () => {
		assert.isFalse(helpers.isNumber({foo: 'bar'}));
	});

	it('should return false for an empty array', () => {
		assert.isFalse(helpers.isNumber([]));
	});

	it('should return false if no argument passed', () => {
		assert.isFalse(helpers.isNumber());
	});

	it('should return true if a number is passed', () => {
		assert.isTrue(helpers.isNumber(1));
	});

	it('should return true if a number object is passed', () => {
		assert.isTrue(helpers.isNumber(new Number(1)));
	});

	it('should return false if a string is passed', () => {
		assert.isFalse(helpers.isNumber('abc123'));
	});

	it('should return false if a string object is passed', () => {
		assert.isFalse(helpers.isNumber(new String("abc123")));
	});

	it('should return false if a function is passed', () => {
		assert.isFalse(helpers.isNumber(function(){}));
	});
});

describe('isObject', () => {
	it('should return true for an empty object', () => {
		assert.isTrue(helpers.isObject({}));
	});

	it('should return true for an object', () => {
		assert.isTrue(helpers.isObject({foo: 'bar'}));
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

	it('should return false if a number object is passed', () => {
		assert.isFalse(helpers.isObject(new Number(1)));
	});

	it('should return false if a string is passed', () => {
		assert.isFalse(helpers.isObject('abc123'));
	});

	it('should return false if a string object is passed', () => {
		assert.isFalse(helpers.isObject(new String("abc123")));
	});

	it('should return false if a function is passed', () => {
		assert.isFalse(helpers.isObject(function(){}));
	});
});

describe('isString', () => {
	it('should return false for an empty object', () => {
		assert.isFalse(helpers.isString({}));
	});

	it('should return false for an object', () => {
		assert.isFalse(helpers.isString({foo: 'bar'}));
	});

	it('should return false for an empty array', () => {
		assert.isFalse(helpers.isString([]));
	});

	it('should return false if no argument passed', () => {
		assert.isFalse(helpers.isString());
	});

	it('should return false if a number is passed', () => {
		assert.isFalse(helpers.isString(1));
	});

	it('should return false if a number object is passed', () => {
		assert.isFalse(helpers.isString(new Number(1)));
	});

	it('should return false if a function is passed', () => {
		assert.isFalse(helpers.isString(function(){}));
	});

	it('should return true if a string is passed', () => {
		assert.isTrue(helpers.isString('abc123'));
	});

	it('should return true if a string object is passed', () => {
		assert.isTrue(helpers.isString(new String("abc123")));
	});
});

describe('objIsEmpty', () => {
	it('should return true for an empty object', () => {
		assert.isTrue(helpers.objIsEmpty({}));
	});

	it('should return false for an object', () => {
		assert.isFalse(helpers.objIsEmpty({foo: 'bar'}));
	});

	it('should throw an error for an empty array', () => {
		assert.throw(
			() => {helpers.objIsEmpty([])}, 
			Error, 
			"Not an object"
		);
	});

	it('should throw an error if no argument passed', () => {
		assert.throw(
			() => {helpers.objIsEmpty()}, 
			Error, 
			"Not an object"
		);
	});

	it('should throw an error if a number is passed', () => {
		assert.throw(
			() => {helpers.objIsEmpty(1)}, 
			Error, 
			"Not an object"
		);
	});

	it('should throw an error if a number object is passed', () => {
		assert.throw(
			() => {helpers.objIsEmpty(new Number(1))}, 
			Error, 
			"Not an object"
		);
	});

	it('should throw an error if a string is passed', () => {
		assert.throw(
			() => {helpers.objIsEmpty('abc123')}, 
			Error, 
			"Not an object"
		);
	});

	it('should throw an error if a string object is passed', () => {
		assert.throw(
			() => {helpers.objIsEmpty(new String("abc123"))}, 
			Error, 
			"Not an object"
		);
	});

	it('should throw an error if a function is passed', () => {
		assert.throw(
			() => {helpers.objIsEmpty(function(){})}, 
			Error, 
			"Not an object"
		);
	});
});
