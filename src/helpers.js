module.exports = {
	isDate: function(input) {
		return Object.prototype.toString.call(input) === '[object Date]';
	},

	isNumber: function(input) {
		return Object.prototype.toString.call(input) === '[object Number]';
	},

	isObject: function(input) {
		return Object.prototype.toString.call(input) === '[object Object]';
	},

	isString: function(input) {
		return Object.prototype.toString.call(input) === '[object String]';
	},

	makeDateObj: function(input) {
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
	},

	objIsEmpty: function(input) {
		if (!this.isObject(input)) {
			throw new Error("Not an object");
		}

	    return Object.keys(input).length === 0;
	}
};