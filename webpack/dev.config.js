var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	context: path.join(__dirname, '../frontend'),
	entry: [
		path.join(__dirname, '../frontend'),
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
	],
	output: {
		path: path.join(__dirname, '../assets/dist'),
		publicPath: '/dist/',
		filename: 'bundle.js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
	],
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'react-hot!babel?presets[]=react&presets[]=es2015', exclude: /node_modules/ },
			{ test: /\.eot$/,  loader: "file-loader" },
			{ test: /\.woff2?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg$/,  loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
			{ test: /\.css$/, loaders: ['style', 'css'] },
			{ test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
		]
	}
};
