const slsw = require('serverless-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    // optimization: {
	// 	minimize: false
	// },
    // module: {
    //     rules: [
    //         { test: /\.tsx?$/, loader: 'ts-loader', exclude: [path.resolve(__dirname, './pages/')] },
    //     ],
    // },
    externals: [nodeExternals()],
    plugins: [
        new CopyWebpackPlugin([{ from: './.next', to: './.next' }])
    ]
}
