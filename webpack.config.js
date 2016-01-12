var path = require('path');
var webpack = require('webpack');
var os = require("os");
var host = os.hostname();
var buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  	entry: './src/app.jsx',
	output: {
		filename: 'bundle.js',
		path: buildPath,
	},
	module: {
		loaders: [
			{
			  loader: "babel-loader",

			  // Skip any files outside of your project's `src` directory
			  include: [
				path.resolve(__dirname, "src"),
			  ],

			  // Only run `.js` and `.jsx` files through Babel
			  test: /\.jsx?$/,

			  // Options to configure babel with
			  query: {
				presets: ['es2015', 'react'],
			  }
			},
		]
	}
};