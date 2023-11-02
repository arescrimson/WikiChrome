const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
   mode: "production",
   entry: {
      background: path.resolve(__dirname, "..", "src", "background.ts"),
      popup: path.resolve(__dirname, "..", "src", "popup", "popup.ts"),
      contentScript: path.resolve(__dirname, "..", "src", "scripts", "content-script.ts"),
   },
   output: {
      path: path.join(__dirname, "../dist"),
      filename: "[name].js",
   },
   resolve: {
      extensions: [".ts", ".js", ".html"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ],
        },
      ], 
      
   },
   plugins: [
      new CopyPlugin({
         patterns: [{from: ".", to: ".", context: "public"}]
      }),
      new HtmlWebpackPlugin({
         template: './src/popup/popup.html', // HTML template in src
         filename: 'popup.html', // Output HTML filename
     }),
     new MiniCssExtractPlugin({
         filename: 'style.css',
     }),
   ],
   watch: true, 
};