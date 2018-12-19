const slsw = require('serverless-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    // optimization: {
	// 	minimize: false
	// },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.webpack.json'
                }
            },
        ],
    },
    externals: [nodeExternals()],
    plugins: [
        new CopyWebpackPlugin([{ from: './.next', to: './.next' }])
    ]
}
