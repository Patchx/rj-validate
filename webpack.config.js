// ----------------
// - Dependencies -
// ---------------- 

const path = require('path');

// -------------
// - Variables -
// -------------

// Don't change library_name, because it changes the function name when using the CDN
var library_name = 'rj';
var output_file = library_name + '.js';

// ----------
// - Export -
// ----------

module.exports = {
	entry: './src/index.js',

	output: {
		filename: output_file,
		path: path.resolve(__dirname, 'dist'),
		
		// Fixes for publishing to npm
	    library: library_name,
    	libraryTarget: 'umd',
    	umdNamedDefine: true,
		globalObject: "typeof self !== 'undefined' ? self : this"
	},

    module: {
    	rules: [{
      		test: /\.js$/,
      		exclude: /node_modules/, // exclude any and all files in the node_modules folder
      		use: [{
        		loader: "babel-loader",
    		}]
    	}]
	},
};
