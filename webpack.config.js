const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'assets/js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'pages/button.html',
            template: './src/pages/button.html',
            inject: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.css'
        }),
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.[sa]?css$/i,
            use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
                filename: './assets/img/[name][ext][query]',
              }
          },
          
        ], 
      },
      optimization: {
        minimizer: [
          new CssMinimizerPlugin(), '...'
        ],
    }
}