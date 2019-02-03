var assert = require('chai').assert;
var rj = require('../src/index.js');

console.log(rj);
console.log('ssssss');

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

	// it('should throw an error if no arguments passed', () => {
	// 	assert.equal(rj.validate(), 'test');
	// });
});