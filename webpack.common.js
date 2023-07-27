const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const appDir = fs.realpathSync(process.cwd());

module.exports = {
    entry: path.resolve(appDir, "src/index.tsx"),
    output: {
        filename: "js/babylonBundle.js",
        path: path.resolve("dist/"),
    },
    resolve: {
        extensions: [".ts", ".js"],
        fallback: {
            fs: false,
            path: false,
        }
    },
    module: {
        rules: [
            { test: /\.m?js/ },
            {
                test: /\.(js|mjs|jsx|ts|tsx)/,
                loader: "source-map-loader",
                enforce: "pre",
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.(glsl|vs|fs)$/,
                loader: "ts-shader-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|env|glb|gltf|stl)$/i,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(appDir, "public/index.html"),
        })
    ]
}
