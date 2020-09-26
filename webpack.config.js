//Webpack requires this to work with directories
const path = require( 'path' );
const cdcSass = require( 'node-sass' );
const extract = require( 'mini-css-extract-plugin' );

// This is main configuration object that tells Webpackw what to do.
module.exports = {
	//mode
	mode: 'production',
	//path to entry paint
	entry: './index.js',
	//path and filename of the final output
	output: {
		path: path.resolve( __dirname, './' ),
		filename: 'bundle.js',
		publicPath: "/assets/"
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				use: [
				  	{
						loader: "html-loader",
						options: {
						}
				  	}
				]
			},
			{
				test: /\.css$/i,
				use: [
				  // Creates `style` nodes from JS strings
				  'style-loader',
				  // Translates CSS into CommonJS
				  'css-loader',
				  // Compiles Sass to CSS
				  'sass-loader',
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				  // Creates `style` nodes from JS strings
				  'style-loader',
				  // Translates CSS into CommonJS
				  'css-loader',
				  // Compiles Sass to CSS
				  'sass-loader',
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env', '@babel/preset-react' ]
					}
				}
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
				  	{
						loader: 'file-loader',
				  	},
				],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: '@svgr/webpack'
					}
				],
			},
		]
	},
	resolve: {
		extensions: [ ".jsx", ".js" ]
	}
};
