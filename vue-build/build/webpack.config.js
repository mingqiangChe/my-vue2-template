// webpack的开发环境和生产环境的共有配置(开发环境和生产环境都是需要执行的配置)
// 配置文件
const path = require('path')
const webpack = require('webpack');
//清除build/dist文件夹文件 优化打包
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 生成创建Html入口文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//将css提取到单独的文件中
const MiniCssExtract = require('mini-css-extract-plugin');
//压缩js文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  console.log(process.env.NODE_ENV);
  const NODE_ENV = process.env.NODE_ENV;
  // console.log(NODE_ENV)

  // 模块别名的配置，为了使用方便，一般来说所有模块都是要配置一下别名的
  // alias: {
  //   'vue': path.resolve(__dirname, '/src/services/lib/vue.min.js'),
  //   'axios': path.resolve(__dirname, '/src/services/lib/axios.min.js')
  // }
  entry: {
    // 配置多入口文件vendors: [ 'vue', 'axios' ] 单个入口就是main.js
    // main: path.resolve(__dirname, '/src/main.js'),
    index: path.resolve(__dirname, '/src/main.js'),
    // vendors: ('vue', 'axios')
  },
  output: {
    // 配置打包文件输出的目录
    path: path.resolve(__dirname, 'dist'),
    // 指定生成的 js 文件名称
    filename: 'js/[name].[hash:8].js',
    // 生成的 chunk 名称
    chunkFilename: 'js/[name].[hash:8].js',
    // 资源引用的路径
    publicPath: '/'
    /* 静态目录，可以直接从这里取文件 */
    //  publicPath: 'http://www.xxx.com/dist/',
  },
  module: {
    //loader
    rules: [
      //正则表达式匹配.vue为后缀的文件
      {
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
      },
      //正则表达式匹配.less为后缀的文件
      //使用lodaer来处理
      {
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
      // 正则表达式匹配.js为后缀的文件
      {
        test: /\.js$/,  //普通的loader
        //不包括node_modules
        exclude: /node_modules/,
        use: [{
          // 解析es6语法
          loader: "babel-loader"
        }]
      },
      // 正则表达式匹配.html为后缀的文件
      {
        test: /\.html$/,
        use: ['html-withimg-loader']
      },
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
      //正则表达式匹配.jpe,jpg,png,gif为后缀的图片文件
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
      // 使用sass-resources-loader可以使得在所用sass（less）共享全局变量、mixin和函数等。不再需要一个个去加载他们。
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
          {
            //先用sass-resources-loader处理
            loader: "sass-resources-loader",
            options: {
              //指定全局样式文件路径（数组）
              resources: [path.resolve(__dirname, "src/assets/css/global.scss")]
            }
          }
        ]
      },
      // 打包iconfont
      {
        test: /\.(woff2|woff|ttf)$/,
        loader: "url-loader",
        options: {
          name: "[name][hash:5].[ext]",
          limit: 1024,
          outputPath: "icon",
          esModule: false,
          // publicPath: "../"
        },
        type: "javascript/auto"
      }
    ]
  },
  // 同样的解析配置  依赖
  plugins: [
    //使用插件清除dist文件夹中的文件❤️（是否需要配置路径）
    new CleanWebpackPlugin(
      //   {
      //   path: '/dist'
      // }
    ),
    new VueLoaderPlugin(),
    //提取css到xx中
    new MiniCssExtract({
      // filename: 'style.css'
      filename: './css/[name].css'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
