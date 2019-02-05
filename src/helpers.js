module.exports = {
	isNumber: function(input) {
		return Object.prototype.toString.call(input) === '[object Number]';
	},

	isObject: function(input) {
		return Object.prototype.toString.call(input) === '[object Object]';
	},

	isString: function(input) {
		return Object.prototype.toString.call(input) === '[object String]';
	},

	objIsEmpty: function(input) {
		if (!this.isObject(input)) {
			throw new Error("Not an object");
		}

	    return Object.keys(input).length === 0;
	}
};