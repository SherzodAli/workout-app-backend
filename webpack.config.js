import path from 'path'
import nodeExternals from 'webpack-node-externals'

const __dirname = path.resolve()

export default {
	entry: './app/index.js',
	mode: 'development',
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.cjs'
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			'@config': path.resolve(__dirname, './app/config'),
			'@libraries': path.resolve(__dirname, './app/libraries'),
			'@middleware': path.resolve(__dirname, './app/middleware'),
			'@modules': path.resolve(__dirname, './app/modules')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader']
			}
		]
	},
	externals: [nodeExternals()]
}
