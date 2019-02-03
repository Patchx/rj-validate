module.exports = {
	isObject: (input) => {
		return Object.prototype.toString.call(input) === '[object Object]';
	}
};