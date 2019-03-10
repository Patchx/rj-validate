var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('Should pass before_or rule', () => {
	it('is 2010-10-01 before_or 2010-10-02', () => {
		var result = rules.beforeOr('2010-10-01', {before_or: '2010-10-02'});
		assert.equal(result, true);
	});

	it('is 2010-10-01 before_or 2018-01-01', () => {
		var result = rules.beforeOr('2010-10-01', {before_or: '2018-01-01'});
		assert.equal(result, true);
	});

	it('is 10/01/1987 before_or 01/01/2000', () => {
		var result = rules.beforeOr('10/01/1987', {before_or: '01/01/2000'});
		assert.equal(result, true);
	});

	it('is 10/01/87 before_or 2010-10-01', () => {
		var result = rules.beforeOr('10/01/87', {before_or: '2010-10-01'});
		assert.equal(result, true);
	});

	it('is 10/01/87 before_or new Date(2010-10-01)', () => {
		var result = rules.beforeOr('10/01/87', {before_or: new Date('2010-10-01')});
		assert.equal(result, true);
	});

	it('is 2010-10-01 before_or 2018-01-01 05:01:00', () => {
		var result = rules.beforeOr('2010-10-01', {before_or: '2018-01-01 05:01:00'});
		assert.equal(result, true);
	});

	it('is 2010-10-01 before_or 2010-10-01 00:00:01', () => {
		var result = rules.beforeOr('2010-10-01', {before_or: '2010-10-01 00:00:01'});
		assert.equal(result, true);
	});

	it('is 2010-10-01 00:00:01 before_or 2010-10-01 00:00:02', () => {
		var result = rules.beforeOr('2010-10-01 00:00:01', {before_or: '2010-10-01 00:00:02'});
		assert.equal(result, true);
	});

	it('is new Date(2010-10-01 00:00:01) before_or new Date(2010-10-01 00:00:02)', () => {
		var test_date = new Date('2010-10-01 00:00:01');
		var rules_date = new Date('2010-10-01 00:00:02');
		var result = rules.beforeOr(test_date, {before_or: rules_date});
		
		assert.equal(result, true);
	});

	it('is 2018-01-01 before_or 2018-01-01', () => {
		var result = rules.beforeOr('2018-01-01', {before_or: '2018-01-01'});
		assert.equal(result, true);
	});

	it('is 10/01/87 before_or 10/01/87', () => {
		var result = rules.beforeOr('10/01/87', {before_or: '10/01/87'});
		assert.equal(result, true);
	});

	it('is 10/01/87 before_or new Date(10/01/87)', () => {
		var result = rules.beforeOr('10/01/87', {before_or: new Date('10/01/87')});
		assert.equal(result, true);
	});

	it('is 2010-10-01 00:00:01 before_or 2010-10-01 00:00:01', () => {
		var result = rules.beforeOr('2010-10-01 00:00:01', {before_or: '2010-10-01 00:00:01'});
		assert.equal(result, true);
	});
});

describe('Should fail before_or rule', () => {
	it('is 2010-10-02 before_or 2010-10-01', () => {
		var result = rules.beforeOr('2010-10-02', {before_or: '2010-10-01'});
		assert.equal(result, false);
	});

	it('is 01/01/2000 before_or 10/01/1987', () => {
		var result = rules.beforeOr('01/01/2000', {before_or: '10/01/1987'});
		assert.equal(result, false);
	});

	it('is new Date(2010-10-01 00:00:02) before_or new Date(2010-10-01 00:00:01)', () => {
		var test_date = new Date('2010-10-01 00:00:02');
		var rules_date = new Date('2010-10-01 00:00:01');
		var result = rules.beforeOr(test_date, {before_or: rules_date});
		
		assert.equal(result, false);
	});
});
