var assert = require('chai').assert;
var rules = require('../src/rules_functions.js');

describe('isDateTime rule on a number', () => {
	it('should return false for 0 with a rule of yyyy-mm-dd hh:mm:ss', () => {
		var result = rules.isDateTime(0, {is_datetime: 'yyyy-mm-dd hh:mm:ss'});
		assert.equal(result, false);
	});

	it('should return true for 0 and is_datetime:false', () => {
		var result = rules.isDateTime(0, {is_datetime: false});
		assert.equal(result, true);
	});
});

describe('Should pass isDateTime rule', () => {
	it('is 2010-10-01 03:11:02 with a rule of true', () => {
		var result = rules.isDateTime('2010-10-01 03:11:02', {is_datetime: true});
		assert.equal(result, true);
	});

	it('is 2010-10-01 03:11:02 with a rule of yyyy-mm-dd hh:mm:ss', () => {
		var result = rules.isDateTime('2010-10-01 03:11:02', {is_datetime: 'yyyy-mm-dd hh:mm:ss'});
		assert.equal(result, true);
	});

	it('is 10/01/1987 02:10:00 with a rule of mm/dd/yyyy hh:mm:ss', () => {
		var result = rules.isDateTime('10/01/1987 02:10:00', {is_datetime: 'mm/dd/yyyy hh:mm:ss'});
		assert.equal(result, true);
	});

	it('is 10/01/87 02:10:00 with a rule of mm/dd/yy hh:mm:ss', () => {
		var result = rules.isDateTime('10/01/87 02:10:00', {is_datetime: 'mm/dd/yy hh:mm:ss'});
		assert.equal(result, true);
	});

	it('is 2010-10-01 03:11:02 with a rule of yyyy-mm-dd hh:mm:ss', () => {
		var result = rules.isDateTime('2010-10-01 03:11:02', {is_datetime: 'yyyy-mm-dd hh:mm:ss'});
		assert.equal(result, true);
	});
});

describe('Should fail isDateTime rule', () => {
	it('is 2010-10-01 with a rule of yyyy-mm-dd hh:mm:ss', () => {
		var result = rules.isDateTime('2010-10-01', {is_datetime: 'yyyy-mm-dd hh:mm:ss'});
		assert.equal(result, false);
	});

	it('is 10/01/1987 with a rule of mm/dd/yyyy', () => {
		var result = rules.isDateTime('10/01/1987', {is_datetime: 'mm/dd/yyyy'});
		assert.equal(result, false);
	});

	it('is 10/01/87 with a rule of mm/dd/yy', () => {
		var result = rules.isDateTime('10/01/87', {is_datetime: 'mm/dd/yy'});
		assert.equal(result, false);
	});

	it('is a date object with a rule of yyyy-mm-dd hh:mm:ss', () => {
		var result = rules.isDateTime(new Date(), {is_datetime: 'yyyy-mm-dd hh:mm:ss'});
		assert.equal(result, false);
	});

	it('is 2010-10-01 with a rule of mm/dd/yyyy', () => {
		var result = rules.isDateTime('2010-10-01', {is_datetime: 'mm/dd/yyyy'});
		assert.equal(result, false);
	});
});
