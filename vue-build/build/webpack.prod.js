// 生产环境配置
// 提取公共代码　 　　    
// 压缩混淆(压缩混淆代码，清除代码空格，注释等信息使其变得难以阅读)
// 文件压缩/base64编码(压缩代码，减少线上环境文件包的大小)
// 去除无用的代码

const { merge } = require('webpack-merge');
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
// 将css提取到单独的文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
// css压缩
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
//压缩js代码
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 打包文件分析工具
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
//进行合并，将webpack.base.conf.js中的配置合并到这
module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: '#source-map',
  optimization: {
    minimizer: [
      //压缩CSS代码
      new OptimizeCss(),
      //压缩js代码
      new UglifyJsPlugin({
        //启用文件缓存
        cache: true,
        //使用多线程并行运行提高构建速度
        parallel: true,
        //使用 SourceMaps 将错误信息的位置映射到模块
        sourceMap: true
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    // 提取css到 filename css/xx
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new OptimizeCssnanoPlugin({
      sourceMap: true,
      cssnanoOptions: {
        preset: [
          'default',
          {
            mergeLonghand: false,
            cssDeclarationSorter: false
          }
        ]
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '/dist')
      }
    ]),
    // 清除无用代码
    new CleanWebpackPlugin({
      path: '/dist'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      analyzerHost: "127.0.0.1",
      analyzerPort: 8888, // 运行后的端口号
      reportFilename: "report.html",
      defaultSizes: "parsed",
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: "stats.json",
      statsOptions: null,
      logLevel: "info"
    }),
    // 使用插件定义全局变量DEV
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ]
})
