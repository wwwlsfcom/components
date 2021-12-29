const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {presets: ['@babel/env']}
            },
            {
                test: /\.tsx$/i,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    "style-loader",
                    // 将 CSS 转化成 CommonJS 模块
                    "css-loader",
                    // 将 Sass 编译成 CSS
                    "sass-loader",
                ],
            }, {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx'],
    },
    output: {
        library: {
            type: 'umd',
            export: "default"
        }
    },
};