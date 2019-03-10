// ---------------------
// - Private Functions -
// ---------------------

function isArray(input) {
	return Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
	const object_type = Object.prototype.toString.call(input);

	const invalid_types = [
		'[object Undefined]',
		'[object Boolean]',
		'[object Number]',
		'[object String]',
		'[object Array]',
		'[object Function]',
	];

	return invalid_types.indexOf(object_type) === -1;
}

function makeDateObject(input) {
	if (input.match(/\:/) === null) {
		// To deal with timezone issues
		input += ' 00:00:00';
	}

	const date_obj = new Date(input);
	const year = date_obj.getFullYear().toString();
	const month = date_obj.getMonth() + 1;
	const day = date_obj.getDate();
	const hour = date_obj.getHours();
	const min = date_obj.getMinutes();
	const sec = date_obj.getSeconds();
	const to_prepend = [month, day, hour, min, sec];

	var prepended = to_prepend.map(function(item) {
		if (item < 10) {
			return '0' + item.toString();
		} else {
			return item.toString();
		}
	});

	return {
		year: year,
		month: prepended[0],
		day: prepended[1],
		hour: prepended[2],
		min: prepended[3],
		sec: prepended[4],
	};
}

// -----------
// - Exports -
// -----------

module.exports = {
	inArray: function(needle, haystack) {
		if (!isArray(haystack)) {
			throw new Error("Second parameter to inArray() must be an array");
		}

		return haystack.indexOf(needle) !== -1;
	},

	isArray: function(input) {
		return isArray(input);
	},

	isBoolean: function(input) {
		return Object.prototype.toString.call(input) === '[object Boolean]';
	},

	isDate: function(input) {
		if (Object.prototype.toString.call(input) === '[object Date]') {
			return true;
		}

		if (Object.prototype.toString.call(input) !== '[object String]') {
			return false;
		}

		const date_obj = makeDateObject(input);
		
		const date_strings = [
			`${date_obj.year}-${date_obj.month}-${date_obj.day}`,
			`${date_obj.month}/${date_obj.day}/${date_obj.year}`,
			`${date_obj.month}/${date_obj.day}/${date_obj.year.substring(2)}`
		];

		for (var i = 0; i < date_strings.length; i++) {
			if (input === date_strings[i]) {
				return true;
			}
		}

		return false;
	},

	isDateTime: function(input) {
		if (Object.prototype.toString.call(input) === '[object Date]') {
			return true;
		}

		if (Object.prototype.toString.call(input) !== '[object String]') {
			return false;
		}

		const date_obj = makeDateObject(input);
		
		const date_strings = [
			`${date_obj.year}-${date_obj.month}-${date_obj.day} ${date_obj.hour}:${date_obj.min}:${date_obj.sec}`,
			`${date_obj.month}/${date_obj.day}/${date_obj.year} ${date_obj.hour}:${date_obj.min}:${date_obj.sec}`,
			`${date_obj.month}/${date_obj.day}/${date_obj.year.substring(2)} ${date_obj.hour}:${date_obj.min}:${date_obj.sec}`
		];

		for (var i = 0; i < date_strings.length; i++) {
			if (input === date_strings[i]) {
				return true;
			}
		}

		return false;
	},

	isNumber: function(input) {
		return Object.prototype.toString.call(input) === '[object Number]';
	},

	isObject: function(input) {
		return isObject(input);
	},

	isString: function(input) {
		return Object.prototype.toString.call(input) === '[object String]';
	},

	makeDateObj: function(input) {
		return makeDateObject(input);
	},

	objIsEmpty: function(input) {
		if (!isObject(input)) {
			throw new Error("Not an object");
		}

	    return Object.keys(input).length === 0;
	}
};