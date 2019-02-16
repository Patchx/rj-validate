var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('isEmail rule on a number', () => {
	it('should return false for 0', () => {
		var result = rules.isEmail(0, {email: true});
		assert.equal(result, false);
	});

	it('should return true for 0 and email:false', () => {
		var result = rules.isEmail(0, {email: false});
		assert.equal(result, true);
	});
});

describe('Should pass isEmail rule', () => {
	it('is example@test.com', () => {
		var result = rules.isEmail('example@test.com', {email: true});
		assert.equal(result, true);
	});

	it('is foobar@yahoo.net', () => {
		var result = rules.isEmail('foobar@yahoo.net', {email: true});
		assert.equal(result, true);
	});

	it('is 我買@屋企.香港', () => {
		var result = rules.isEmail('我買@屋企.香港', {email: true});
		assert.equal(result, true);
	});

	it('is üñîçøðé@example.com', () => {
		var result = rules.isEmail('üñîçøðé@example.com', {email: true});
		assert.equal(result, true);
	});

	it('is username@domain.com', () => {
		var result = rules.isEmail('username@domain.com', {email: true});
		assert.equal(result, true);
	});
});

describe('Should fail isEmail rule', () => {
	it('is example@test', () => {
		var result = rules.isEmail('example@test', {email: true});
		assert.equal(result, false);
	});

	it('is test.com', () => {
		var result = rules.isEmail('test.com', {email: true});
		assert.equal(result, false);
	});
});
