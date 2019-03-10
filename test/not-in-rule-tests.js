var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('notIn rule should error', () => {
	it('for 1 not_in 1', () => {
		assert.throw(
			() => {rules.notIn(1, {not_in: 1})}, 
			Error, 
			'argument supplied to "not_in" rule must be either an array or an object'
		);
	});

	it('for "b" not_in "abc123"', () => {
		assert.throw(
			() => {rules.notIn("b", {not_in: "abc123"})}, 
			Error, 
			'argument supplied to "not_in" rule must be either an array or an object'
		);
	});

	it('for 1 not_in true', () => {
		assert.throw(
			() => {rules.notIn(1, {not_in: true})}, 
			Error, 
			'argument supplied to "not_in" rule must be either an array or an object'
		);
	});
});

describe('notIn rule should fail', () => {
	it('for 4 not_in [1,3,4,6,9]', () => {
		var result = rules.notIn(4, {not_in: [1,3,4,6,9]});
		assert.equal(result, false);
	});

	it('for undefined not_in [undefined]', () => {
		var result = rules.notIn(undefined, {not_in: [undefined]});
		assert.equal(result, false);
	});

	it('for "breed" not_in {breed: "Shih Tzu"}', () => {
		var result = rules.notIn("breed", {not_in: {breed: "Shih Tzu"}});
		assert.equal(result, false);
	});

	it('for "species" not_in a prototype chain', () => {
		function ShihTzu(name) {
			this.name = name;
		}

		ShihTzu.prototype = {species: 'dog'};
		var my_pet = new ShihTzu('Chewy');


		var result = rules.notIn("species", {not_in: my_pet});
		assert.equal(result, false);
	});
});

describe('notIn rule should pass', () => {
	it('for 1 not_in false', () => {
		var result = rules.notIn(1, {not_in: false});
		assert.equal(result, true);
	});

	it('for 1 not_in [2,3,4,5]', () => {
		var result = rules.notIn(1, {not_in: [2,3,4,5]});
		assert.equal(result, true);
	});

	it('for undefined not_in []', () => {
		var result = rules.notIn(undefined, {not_in: []});
		assert.equal(result, true);
	});

	it('for "color" not_in {breed: "Shih Tzu"}', () => {
		var result = rules.notIn("color", {not_in: {breed: "Shih Tzu"}});
		assert.equal(result, true);
	});
});