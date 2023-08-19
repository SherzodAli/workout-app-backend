import path from 'path'
import nodeExternals from 'webpack-node-externals'

const __dirname = path.resolve()

export default {
	entry: './src/index.ts',
	mode: 'development',
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.cjs'
	},
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			'@config': path.resolve(__dirname, './src/config'),
			'@libraries': path.resolve(__dirname, './src/libraries'),
			'@middleware': path.resolve(__dirname, './src/middleware'),
			'@apps': path.resolve(__dirname, './src/apps')
		}
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['ts-loader']
			}
		]
	},
	externals: [nodeExternals()]
}
