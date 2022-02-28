// webpack的开发环境和生产环境的共有配置(开发环境和生产环境都是需要执行的配置)
// 配置文件
const path = require('path')
const webpack = require('webpack');
//清除build/dist文件夹文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 生成创建Html入口文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//将css提取到单独的文件中
const MiniCssExtract = require('mini-css-extract-plugin');
//css压缩
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
//压缩js文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: {
    // 配置入口文件
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    // 配置打包文件输出的目录
    path: path.resolve(__dirname, '../dist'),
    // 生成的 js 文件名称
    filename: 'js/[name].[hash:8].js',
    // 生成的 chunk 名称
    chunkFilename: 'js/[name].[hash:8].js',
    // 资源引用的路径
    publicPath: '/'
  },
  devServer: {
    hot: true,
    port: 3000,
    contentBase: './dist',
    open: true,
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.js',
      '.vue'
    ]
  },
  module: {
    rules: [
      //loader
      {
        //正则表达式匹配.css为后缀的文件
        test: /\.css$/,
        //使用loader
        use: [
          MiniCssExtract.loader,
          'css-loader',
          {
            loader: "postcss-loader"
          },
        ]
        //正则表达式匹配.less为后缀的文件
        //使用lodaer来处理
      }, {
        test: /\.less$/,
        use: [
          MiniCssExtract.loader,
          'css-loader',
          {
            loader: "postcss-loader"
          },
          'less-loader'
        ]
      },
      /* {
           test: /\.js$/,
         //不包括node_modules
           exclude: /node_modules/,
           use: [{
               loader: "eslint-loader",
               options: {
                   enforce: 'pre'    //强制更改顺序，pre 前  post 后
               }
           }],
       },*/
      {
        test: /\.js$/,  //普通的loader
        //不包括node_modules
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }]
      },
      {
        test: /\.html$/,
        use: ['html-withimg-loader']
      },
      //正则表达式匹配.vue为后缀的文件
      test: /\.vue$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'cache-loader'
        },
        {
          loader: 'thread-loader'
        },
        {
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            },
          }
        }
      ]

      //正则表达式匹配.jsx为后缀的文件
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader'
          }
        ]
      },
      //正则表达式匹配.jpe,jpg,png,gif为后缀的文件
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      //正则表达式匹配.mp4为后缀的文件
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      //正则表达式匹配.woff2为后缀的文件
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    //使用插件清除dist文件夹中的文件
    new CleanWebpackPlugin({
      path: './dist'
    }),
    new VueLoaderPlugin(),
    // 使用插件生成Html入口文件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html',
        minify: {
        collapseWhitespace: true,//清除空格
        removeComments: true,//移除注释
        removeAttributeQuotes: true,//清除多余引号
      },
        //为所有js和css等静态资源添加hash
        // hash: true
      )
    }),
    //提取css到style.css中
    new MiniCssExtract({
      filename: 'style.css'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    const NODE_ENV = process.env.NODE_ENV;
  console.log(NODE_ENV);
  ]
}
