var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('Should fail after_or rule', () => {
	it('is 2010-10-01 after_or 2010-10-02', () => {
		var result = rules.afterOr('2010-10-01', {after_or: '2010-10-02'});
		assert.equal(result, false);
	});

	it('is 2010-10-01 after_or 2018-01-01', () => {
		var result = rules.afterOr('2010-10-01', {after_or: '2018-01-01'});
		assert.equal(result, false);
	});

	it('is 10/01/1987 after_or 01/01/2000', () => {
		var result = rules.afterOr('10/01/1987', {after_or: '01/01/2000'});
		assert.equal(result, false);
	});

	it('is 10/01/87 after_or 2010-10-01', () => {
		var result = rules.afterOr('10/01/87', {after_or: '2010-10-01'});
		assert.equal(result, false);
	});

	it('is 10/01/87 after_or new Date(2010-10-01)', () => {
		var result = rules.afterOr('10/01/87', {after_or: new Date('2010-10-01')});
		assert.equal(result, false);
	});

	it('is 2010-10-01 after_or 2018-01-01 05:01:00', () => {
		var result = rules.afterOr('2010-10-01', {after_or: '2018-01-01 05:01:00'});
		assert.equal(result, false);
	});

	it('is 2010-10-01 after_or 2010-10-01 00:00:01', () => {
		var result = rules.afterOr('2010-10-01', {after_or: '2010-10-01 00:00:01'});
		assert.equal(result, false);
	});

	it('is 2010-10-01 00:00:01 after_or 2010-10-01 00:00:02', () => {
		var result = rules.afterOr('2010-10-01 00:00:01', {after_or: '2010-10-01 00:00:02'});
		assert.equal(result, false);
	});

	it('is new Date(2010-10-01 00:00:01) after_or new Date(2010-10-01 00:00:02)', () => {
		var test_date = new Date('2010-10-01 00:00:01');
		var rules_date = new Date('2010-10-01 00:00:02');
		var result = rules.afterOr(test_date, {after_or: rules_date});
		
		assert.equal(result, false);
	});
});

describe('Should pass after_or rule', () => {
	it('is 2010-10-02 after_or 2010-10-01', () => {
		var result = rules.afterOr('2010-10-02', {after_or: '2010-10-01'});
		assert.equal(result, true);
	});

	it('is 2018-01-01 after_or 2018-01-01', () => {
		var result = rules.afterOr('2018-01-01', {after_or: '2018-01-01'});
		assert.equal(result, true);
	});

	it('is 01/01/2000 after_or 10/01/1987', () => {
		var result = rules.afterOr('01/01/2000', {after_or: '10/01/1987'});
		assert.equal(result, true);
	});

	it('is 10/01/87 after_or 10/01/87', () => {
		var result = rules.afterOr('10/01/87', {after_or: '10/01/87'});
		assert.equal(result, true);
	});

	it('is 10/01/87 after_or new Date(10/01/87)', () => {
		var result = rules.afterOr('10/01/87', {after_or: new Date('10/01/87')});
		assert.equal(result, true);
	});

	it('is 2010-10-01 00:00:01 after_or 2010-10-01 00:00:01', () => {
		var result = rules.afterOr('2010-10-01 00:00:01', {after_or: '2010-10-01 00:00:01'});
		assert.equal(result, true);
	});

	it('is new Date(2010-10-01 00:00:02) after_or new Date(2010-10-01 00:00:01)', () => {
		var test_date = new Date('2010-10-01 00:00:02');
		var rules_date = new Date('2010-10-01 00:00:01');
		var result = rules.afterOr(test_date, {after_or: rules_date});
		
		assert.equal(result, true);
	});
});
