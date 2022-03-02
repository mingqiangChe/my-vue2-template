const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const { join } = require('path')
// PurifyCSS从你的 CSS 中删除未使用的选择器
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require("glob")
console.log("寻找文件", glob.sync(join(__dirname, './dist/*.html')));
// 该插件将 CSS 提取到单独的文件中。它为每个包含 CSS 的 JS 文件创建一个 CSS 文件。它支持 CSS 和 SourceMaps 的按需加载。
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const setIterm2Badge = require('set-iterm2-badge');
// setIterm2Badge("车车")

const argv = require("yargs-parser")(process.argv.slice(2));
const { merge } = require("webpack-merge");
const _mode = argv.mode || "development";
const _modeflag = (_mode == "production" ? true : false);
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

const HtmlWebpackPlugin = require('html-webpack-plugin')
// 删除/清理构建文件夹的 webpack 插件
const  { CleanWebpackPlugin }  =  require ( 'clean-webpack-plugin' ) ;
webpackConfig = {
  // entry: 'index.js',
  // output: {
  //   path: __dirname + '/dist',
  //   filename: 'index_bundle.js'
  // },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../'
        }
      },
      // "style-loader",
      {
        loader: "css-loader"
      }]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: _modeflag ? "styles/[name].[hash:5].css" : "styles/[name].css",
        chunkFilename: _modeflag ? "styles/[id].[hash:5].css" : "styles/[id].css"
      }),
    new PurifyCSSPlugin({
      paths: glob.sync(join(__dirname, './dist/*.html')),
    }),
    new  CleanWebpackPlugin ({
       // 模拟文件的移除
    // 
    // 默认值：false 
    dry : true ,

    // 将日志写入控制台
    // （当 dry 为 true 时始终启用）
    // 
    // 默认值：false 
    verbose : true ,

    // 在重建时自动删除所有未使用的 webpack 资产
    // 
    // 默认值：true 
    // cleanStaleWe​​bpackAssets: false ,

    // 不允许删除当前的 webpack 资产
    // 默认值：true 
    protectWebpackAssets : false ,
    }), 
    new HtmlWebpackPlugin({
      filename:"index.html",
      template:"src/index.html"
    })
  ],
}
module.exports = merge(_mergeConfig, webpackConfig);
