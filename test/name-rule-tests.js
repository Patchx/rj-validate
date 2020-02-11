var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('Name rule on a number', () => {
	it('should return true for 0 an name of false', () => {
		var result = rules.name(0, {name: false});
		assert.equal(result, true);
	});

	it('should return false for 0', () => {
		var result = rules.name(0, {name: true});
		assert.equal(result, false);
	});

	it('should return false for 1', () => {
		var result = rules.name(1, {name: true});
		assert.equal(result, false);
	});
});

describe('Name rule on a string', () => {
	it('should return true for "" and an name of false', () => {
		var result = rules.name('', {name: false});
		assert.equal(result, true);
	});

	it('should return true for "abc123!@#" and an name of false', () => {
		var result = rules.name('abc123!@#', {name: false});
		assert.equal(result, true);
	});

	it('should return true for ""', () => {
		var result = rules.name('', {name: true});
		assert.equal(result, true);
	});

	it('should return true for "aBc"', () => {
		var result = rules.name('aBc', {name: true});
		assert.equal(result, true);
	});

	it('should return true for "wordsnospaces"', () => {
		var result = rules.name('wordsnospaces', {name: true});
		assert.equal(result, true);
	});

	it('should return true for "words with spaces"', () => {
		var result = rules.name('words with spaces', {name: true});
		assert.equal(result, true);
	});

	it('should return false for "123"', () => {
		var result = rules.name('123', {name: true});
		assert.equal(result, false);
	});

	it('should return false for "abc123"', () => {
		var result = rules.name('abc123', {name: true});
		assert.equal(result, false);
	});

	it('should return true for "Düsseldorf"', () => {
		var result = rules.name('Düsseldorf', {name: true});
		assert.equal(result, true);
	});

	it('should return false for "321Düsseldorf"', () => {
		var result = rules.name('321Düsseldorf', {name: true});
		assert.equal(result, false);
	});

	it('should return false for "Düsseldorf!"', () => {
		var result = rules.name('Düsseldorf!', {name: true});
		assert.equal(result, false);
	});

	it('should return true for "Düsseldorf - Martin Luther King, Jr."', () => {
		var result = rules.name('Düsseldorf - Martin Luther King, Jr.', {name: true});
		assert.equal(result, true);
	});

	it('should return false for "Düsseldorf - Martin Luther King, Jr." and name of "no-accents"', () => {
		var result = rules.name('Düsseldorf - Martin Luther King, Jr.', {name: 'no-accents'});
		assert.equal(result, false);
	});

	it('should return true for "Dusseldorf - Martin Luther King, Jr." and name of "no-accents"', () => {
		var result = rules.name('Dusseldorf - Martin Luther King, Jr.', {name: 'no-accents'});
		assert.equal(result, true);
	});
});
