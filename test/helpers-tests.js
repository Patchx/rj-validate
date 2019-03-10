var assert = require('chai').assert;
var helpers = require('../src/helpers.js');

describe('inArray', () => {
	it('should throw an error if no arguments passed to inArray()', () => {
		assert.throw(
			() => {helpers.inArray()}, 
			Error, 
			"Second parameter to inArray() must be an array"
		);
	});

	it('should throw an error if only 1 argument passed to inArray()', () => {
		assert.throw(
			() => {helpers.inArray(1)}, 
			Error, 
			"Second parameter to inArray() must be an array"
		);
	});

	it('should throw an error if the 2nd argument passed to inArray() is not an array', () => {
		assert.throw(
			() => {helpers.inArray(1, {})}, 
			Error, 
			"Second parameter to inArray() must be an array"
		);
	});

	it('should return true for "a" in the array ["1", "a", "$"]', () => {
		assert.isTrue(helpers.inArray("a", ["1", "a", "$"]));
	});

	it('should return false for "a" in the array ["1", "b", "$"]', () => {
		assert.isFalse(helpers.inArray("a", ["1", "b", "$"]));
	});
});

describe('isArray', () => {
	it('should return false for an empty object', () => {
		assert.isFalse(helpers.isArray({}));
	});

	it('should return false for an object', () => {
		assert.isFalse(helpers.isArray({foo: 'bar'}));
	});

	it('should return true for an empty array', () => {
		assert.isTrue(helpers.isArray([]));
	});

	it('should return true for an array', () => {
		assert.isTrue(helpers.isArray([1, 2, 'abc', {}]));
	});

	it('should return false if no argument passed', () => {
		assert.isFalse(helpers.isArray());
	});

	it('should return false if a number is passed', () => {
		assert.isFalse(helpers.isArray(1));
	});

	it('should return false if a number object is passed', () => {
		assert.isFalse(helpers.isArray(new Number(1)));
	});

	it('should return false if a string is passed', () => {
		assert.isFalse(helpers.isArray('abc123'));
	});

	it('should return false if a string object is passed', () => {
		assert.isFalse(helpers.isArray(new String("abc123")));
	});

	it('should return false if a function is passed', () => {
		assert.isFalse(helpers.isArray(function(){}));
	});

	it('should return false if true is passed', () => {
		assert.isFalse(helpers.isArray(true));
	});

	it('should return false if false is passed', () => {
		assert.isFalse(helpers.isArray(false));
	});
});

describe('isBoolean', () => {
	it('should return false for an empty object', () => {
		assert.isFalse(helpers.isBoolean({}));
	});

	it('should return false for an object', () => {
		assert.isFalse(helpers.isBoolean({foo: 'bar'}));
	});

	it('should return false for an empty array', () => {
		assert.isFalse(helpers.isBoolean([]));
	});

	it('should return false if no argument passed', () => {
		assert.isFalse(helpers.isBoolean());
	});

	it('should return false if a number is passed', () => {
		assert.isFalse(helpers.isBoolean(1));
	});

	it('should return false if a number object is passed', () => {
		assert.isFalse(helpers.isBoolean(new Number(1)));
	});

	it('should return false if a string is passed', () => {
		assert.isFalse(helpers.isBoolean('abc123'));
	});

	it('should return false if a string object is passed', () => {
		assert.isFalse(helpers.isBoolean(new String("abc123")));
	});

	it('should return false if a function is passed', () => {
		assert.isFalse(helpers.isBoolean(function(){}));
	});

	it('should return true if true is passed', () => {
		assert.isTrue(helpers.isBoolean(true));
	});

	it('should return true if false is passed', () => {
		assert.isTrue(helpers.isBoolean(false));
	});
});

describe('isDate', () => {
	it('should return false for an empty string', () => {
		assert.isFalse(helpers.isDate(''));
	});

	it('should return false for a number', () => {
		assert.isFalse(helpers.isDate(1));
	});

	it('should return false when no arguments are passed', () => {
		assert.isFalse(helpers.isDate());
	});

	it('should return false for null', () => {
		assert.isFalse(helpers.isDate(null));
	});

	it('should return false for undefined', () => {
		assert.isFalse(helpers.isDate(undefined));
	});

	it('should return false for an empty object', () => {
		assert.isFalse(helpers.isDate({}));
	});

	it('should return false for a date string', () => {
		assert.isFalse(helpers.isDate('October 13, 2014 11:13:00'));
	});

	it('should return true for a date object created with a date string', () => {
		assert.isTrue(helpers.isDate(new Date('October 13, 2014 11:13:00')));
	});

	it('should return true for a date object created with a year-month-day date string', () => {
		assert.isTrue(helpers.isDate(new Date('1999-12-31')));
	});

	it('should return true for a date object created with 1 Unix time parameter', () => {
		assert.isTrue(helpers.isDate(new Date(86400000)));
	});

	it('should return true for a date object created with multiple parameters', () => {
		assert.isTrue(helpers.isDate(new Date(1995, 11, 17, 3, 24, 0)));
	});

	it('should return false for an array', () => {
		assert.isFalse(helpers.isDate([1, 2, 4, 0]));
	});
});

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

	it('should return true for a date object created with a date string', () => {
		assert.isTrue(helpers.isObject(new Date('October 13, 2014 11:13:00')));
	});

	it('should return true for a object in a prototype chain', () => {
		function Graph() {
			this.vertices = [];
			this.edges = [];
		}

		Graph.prototype = {
			addVertex: function(v) {
				this.vertices.push(v);
			}
		};

		var graph = new Graph();

		assert.isTrue(helpers.isObject(graph));
	});

	it('should return true for a object in an Object.create() prototype chain', () => {
		var a = {a: 1}; 
		var b = Object.create(a);
		var c = Object.create(b);

		assert.isTrue(helpers.isObject(c));
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

describe('makeDateObj', () => {
	it('should return the correct year for "2010-02-14"', () => {
		const date_obj = helpers.makeDateObj('2010-02-14');
		assert.isTrue(date_obj.year === '2010');
	});

	it('should return the correct month for "2010-02-14"', () => {
		const date_obj = helpers.makeDateObj('2010-02-14');
		assert.isTrue(date_obj.month === '02');
	});

	it('should return the correct day for "2010-02-14"', () => {
		const date_obj = helpers.makeDateObj('2010-02-14');
		assert.isTrue(date_obj.day === '14');
	});

	it('should return the correct hour for "2010-02-14"', () => {
		const date_obj = helpers.makeDateObj('2010-02-14');
		assert.isTrue(date_obj.hour === '00');
	});

	it('should return the correct minute for "2010-02-14"', () => {
		const date_obj = helpers.makeDateObj('2010-02-14');
		assert.isTrue(date_obj.min === '00');
	});

	it('should return the correct second for "2010-02-14"', () => {
		const date_obj = helpers.makeDateObj('2010-02-14');
		assert.isTrue(date_obj.sec === '00');
	});

	it('should return the correct year for "1987-10-01 14:30:56"', () => {
		const date_obj = helpers.makeDateObj('1987-10-01 14:30:56');
		assert.isTrue(date_obj.year === '1987');
	});

	it('should return the correct month for "1987-10-01 14:30:56"', () => {
		const date_obj = helpers.makeDateObj('1987-10-01 14:30:56');
		assert.isTrue(date_obj.month === '10');
	});

	it('should return the correct day for "1987-10-01 14:30:56"', () => {
		const date_obj = helpers.makeDateObj('1987-10-01 14:30:56');
		assert.isTrue(date_obj.day === '01');
	});

	it('should return the correct hour for "1987-10-01 14:30:56"', () => {
		const date_obj = helpers.makeDateObj('1987-10-01 14:30:56');
		assert.isTrue(date_obj.hour === '14');
	});

	it('should return the correct minute for "1987-10-01 14:30:56"', () => {
		const date_obj = helpers.makeDateObj('1987-10-01 14:30:56');
		assert.isTrue(date_obj.min === '30');
	});

	it('should return the correct second for "1987-10-01 14:30:56"', () => {
		const date_obj = helpers.makeDateObj('1987-10-01 14:30:56');
		assert.isTrue(date_obj.sec === '56');
	});

	it('should return the correct year for "December 17, 1995"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995');
		assert.isTrue(date_obj.year === '1995');
	});

	it('should return the correct month for "December 17, 1995"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995');
		assert.isTrue(date_obj.month === '12');
	});

	it('should return the correct day for "December 17, 1995"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995');
		assert.isTrue(date_obj.day === '17');
	});

	it('should return the correct hour for "December 17, 1995"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995');
		assert.isTrue(date_obj.hour === '00');
	});

	it('should return the correct minute for "December 17, 1995"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995');
		assert.isTrue(date_obj.min === '00');
	});

	it('should return the correct second for "December 17, 1995"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995');
		assert.isTrue(date_obj.sec === '00');
	});

	it('should return the correct year for "December 17, 1995 00:30:10"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995 00:30:10');
		assert.isTrue(date_obj.year === '1995');
	});

	it('should return the correct month for "December 17, 1995 00:30:10"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995 00:30:10');
		assert.isTrue(date_obj.month === '12');
	});

	it('should return the correct day for "December 17, 1995 00:30:10"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995 00:30:10');
		assert.isTrue(date_obj.day === '17');
	});

	it('should return the correct hour for "December 17, 1995 00:30:10"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995 00:30:10');
		assert.isTrue(date_obj.hour === '00');
	});

	it('should return the correct minute for "December 17, 1995 00:30:10"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995 00:30:10');
		assert.isTrue(date_obj.min === '30');
	});

	it('should return the correct second for "December 17, 1995 00:30:10"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995 00:30:10');
		assert.isTrue(date_obj.sec === '10');
	});

	it('should return the correct year for "12/17/1995"', () => {
		const date_obj = helpers.makeDateObj('12/17/1995');
		assert.isTrue(date_obj.year === '1995');
	});

	it('should return the correct month for "12/17/1995"', () => {
		const date_obj = helpers.makeDateObj('12/17/1995');
		assert.isTrue(date_obj.month === '12');
	});

	it('should return the correct day for "12/17/1995"', () => {
		const date_obj = helpers.makeDateObj('12/17/1995');
		assert.isTrue(date_obj.day === '17');
	});

	it('should return the correct hour for "12/17/1995"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995');
		assert.isTrue(date_obj.hour === '00');
	});

	it('should return the correct minute for "12/17/1995"', () => {
		const date_obj = helpers.makeDateObj('12/17/1995');
		assert.isTrue(date_obj.min === '00');
	});

	it('should return the correct second for "12/17/1995"', () => {
		const date_obj = helpers.makeDateObj('12/17/1995');
		assert.isTrue(date_obj.sec === '00');
	});

	it('should return the correct year for "12/17/1995 01:20:05"', () => {
		const date_obj = helpers.makeDateObj('12/17/1995 01:20:05');
		assert.isTrue(date_obj.year === '1995');
	});

	it('should return the correct month for "12/17/1995 01:20:05"', () => {
		const date_obj = helpers.makeDateObj('12/17/1995 01:20:05');
		assert.isTrue(date_obj.month === '12');
	});

	it('should return the correct day for "12/17/1995 01:20:05"', () => {
		const date_obj = helpers.makeDateObj('12/17/1995 01:20:05');
		assert.isTrue(date_obj.day === '17');
	});

	it('should return the correct hour for "12/17/1995 01:20:05"', () => {
		const date_obj = helpers.makeDateObj('December 17, 1995 01:20:05');
		assert.isTrue(date_obj.hour === '01');
	});

	it('should return the correct minute for "12/17/1995 01:20:05"', () => {
		const date_obj = helpers.makeDateObj('12/17/1995 01:20:05');
		assert.isTrue(date_obj.min === '20');
	});

	it('should return the correct second for "12/17/1995 01:20:05"', () => {
		const date_obj = helpers.makeDateObj('12/17/1995 01:20:05');
		assert.isTrue(date_obj.sec === '05');
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
