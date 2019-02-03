const path = require('path');

module.exports = {
	entry: './src/index.js',

	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
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
