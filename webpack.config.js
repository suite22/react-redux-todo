var path = require('path');
var webpack = require('webpack');
var os = require("os");
var host = os.hostname();
var buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  	entry: './main.js',
	output: {
		filename: 'bundle.js',
		path: './',
	},
	devServer: {
		inline: true,
		port: 3535
	},
	module: {
		loaders: [
			{
			  // Only run `.js` and `.jsx` files through Babel
			  test: /\.jsx?$/,
			  
			  exclude: /node_modules/,
			  
			  loader: "babel",

			  // Options to configure babel with
			  query: {
				presets: ['es2015', 'react'],
			  }
			},
		]
	}
};