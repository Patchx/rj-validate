// For each function, returning 'true' means it passed validation

module.exports = {
	required: function(to_test) {
		return to_test.trim() !== '';
	}
};