const path = require('path')

module.exports = {
    entry: "./src/index.ts",
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [path.resolve(__dirname, './src'), 'node_modules']
    },
    output: {
        publicPath: "public",
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    }
}