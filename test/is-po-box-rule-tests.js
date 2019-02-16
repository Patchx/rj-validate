var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('isPoBox rule on a number', () => {
	it('should return false for 0', () => {
		var result = rules.isPoBox(0, {po_box: true});
		assert.equal(result, false);
	});

	it('should return false for 1', () => {
		var result = rules.isPoBox(0, {po_box: true});
		assert.equal(result, false);
	});
});

describe('Should pass isPoBox rule', () => {
	it('is #123', () => {
		var result = rules.isPoBox('#123', {po_box: true});
		assert.equal(result, true);
	});

	it('is Box 123', () => {
		var result = rules.isPoBox('Box 123', {po_box: true});
		assert.equal(result, true);
	});

	it('is Box122', () => {
		var result = rules.isPoBox('Box122', {po_box: true});
		assert.equal(result, true);
	});

	it('is PO Box N', () => {
		var result = rules.isPoBox('PO Box N', {po_box: true});
		assert.equal(result, true);
	});

	it('is POB 123', () => {
		var result = rules.isPoBox('POB 123', {po_box: true});
		assert.equal(result, true);
	});

	it('is Post Office Box 123', () => {
		var result = rules.isPoBox('Post Office Box 123', {po_box: true});
		assert.equal(result, true);
	});

	it('is Post Office Box', () => {
		var result = rules.isPoBox('Post Office Box', {po_box: true});
		assert.equal(result, true);
	});

	it('is p.o.b. #123', () => {
		var result = rules.isPoBox('p.o.b. #123', {po_box: true});
		assert.equal(result, true);
	});

	it('is po #123', () => {
		var result = rules.isPoBox('po #123', {po_box: true});
		assert.equal(result, true);
	});

	it('is pobox123', () => {
		var result = rules.isPoBox('pobox123', {po_box: true});
		assert.equal(result, true);
	});
});

describe('Should fail isPoBox rule', () => {
	it('is The Postal Road', () => {
		var result = rules.isPoBox('The Postal Road', {po_box: true});
		assert.equal(result, false);
	});

	it('is Box Hill', () => {
		var result = rules.isPoBox('Box Hill', {po_box: true});
		assert.equal(result, false);
	});

	it('is 123 Some Street', () => {
		var result = rules.isPoBox('123 Some Street', {po_box: true});
		assert.equal(result, false);
	});

	it('is 123 box canyon rd', () => {
		var result = rules.isPoBox('123 box canyon rd', {po_box: true});
		assert.equal(result, false);
	});

	it('is 777 Post Oak Blvd', () => {
		var result = rules.isPoBox('777 Post Oak Blvd', {po_box: true});
		assert.equal(result, false);
	});
});
