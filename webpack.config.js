// webpack.config.js
module.exports = {
	// entry point of our application
	entry: './main.js',
	// where to place the compiled bundle
	output: {
		path: __dirname,
		filename: 'build.js'
	},
	module: {
		loaders: [
			{
				// use vue-loader for *.vue files
				test: /\.vue$/,
				loader: 'vue'
      },
			{
				// use babel-loader for *.js files
				test: /\.js$/,
				loader: 'babel',
				// important: exclude files in node_modules
				// otherwise it's going to be really slow!
				exclude: /node_modules/
      },
			{
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          // limit for base64 inlining in bytes
          limit: 10000,
          // custom naming format if file is larger than
          // the threshold
          name: '[name].[ext]?[hash]'
        }
      }
    ]
	},
	// if you are using babel-loader directly then
	// the babel config block becomes required.
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	}
}