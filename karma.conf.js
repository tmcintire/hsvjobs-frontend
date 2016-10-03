var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		browsers: ['Chrome'], // browsers to run the tests in
		singleRun: true,
		frameworks: ['mocha'], // frameworks to use
		files: [
			'app/tests/**/*.test.jsx',
			'node_modules/dist/jquery.min.js',
			'node_modules/foundation-sites/dist/foundation.min.js'
			], //get all files from the test folder
		preprocessors: {
			'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
		},
		reporters: ['mocha'],
		client: {
			mocha: {
				timeout: '5000' // times out the test if they haven't finished in 5 seconds
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
};