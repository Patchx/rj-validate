var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('In rule should error', () => {
	it('for 1 in 1', () => {
		assert.throw(
			() => {rules.in(1, {in: 1})}, 
			Error, 
			'argument supplied to "in" rule must be either an array or an object'
		);
	});

	it('for "b" in "abc123"', () => {
		assert.throw(
			() => {rules.in("b", {in: "abc123"})}, 
			Error, 
			'argument supplied to "in" rule must be either an array or an object'
		);
	});

	it('for 1 in true', () => {
		assert.throw(
			() => {rules.in(1, {in: true})}, 
			Error, 
			'argument supplied to "in" rule must be either an array or an object'
		);
	});
});

describe('In rule should pass', () => {
	it('for 1 in false', () => {
		var result = rules.in(1, {in: false});
		assert.equal(result, true);
	});

	it('for 4 in [1,3,4,6,9]', () => {
		var result = rules.in(4, {in: [1,3,4,6,9]});
		assert.equal(result, true);
	});

	it('for undefined in [undefined]', () => {
		var result = rules.in(undefined, {in: [undefined]});
		assert.equal(result, true);
	});

	it('for "breed" in {breed: "Shih Tzu"}', () => {
		var result = rules.in("breed", {in: {breed: "Shih Tzu"}});
		assert.equal(result, true);
	});

	it('for "species" in a prototype chain', () => {
		function ShihTzu(name) {
			this.name = name;
		}

		ShihTzu.prototype = {species: 'dog'};
		var my_pet = new ShihTzu('Chewy');


		var result = rules.in("species", {in: my_pet});
		assert.equal(result, true);
	});
});

describe('In rule should fail', () => {
	it('for 1 in [2,3,4,5]', () => {
		var result = rules.in(1, {in: [2,3,4,5]});
		assert.equal(result, false);
	});

	it('for undefined in []', () => {
		var result = rules.in(undefined, {in: []});
		assert.equal(result, false);
	});

	it('for "color" in {breed: "Shih Tzu"}', () => {
		var result = rules.in("color", {in: {breed: "Shih Tzu"}});
		assert.equal(result, false);
	});
});