import { Configuration } from 'webpack';

declare var module;
declare var __dirname;

let config: Configuration = {
	entry: './js/src/app.bootstrap',
	resolve: {
		extensions: ['', '.ts']
	},
	module: {
		loaders: [
			{
				test: /.ts$/,
				loader: 'awesome-typescript-loader'
			}
		],
	},
	output: {
		path: `./js/dist`,
		filename: 'bundle.js'
	},
	externals: {
		'angular': 'angular',
		'angular-ui-router': 'angular-ui-router'
	}
}

module.exports = config;