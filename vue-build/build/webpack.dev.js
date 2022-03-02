// 开发环境配置
// 模块热更新webpack-dev-server  （本地开启服务，实时更新）
// sourceMap    (方便打包调试)
// 接口代理　 配置proxyTable解决开发环境中的跨域问题)

// 代码规范检查 (代码规范检查工具)
const merge = require('webpack-merge')
//引入webpack.conf.js文件
const webpackConfig = require('./webpack.config')
const webpack = require('webpack')
//进行合并，将webpack.base.conf.js中的配置合并到这
module.exports = merge(webpackConfig, {
  mode: 'development',
  devServer: {
    contentBase: '/dist',
    //端口号
    port: '8383',
    open: true,
    inline: true,
    historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    hot: true,//允许热加载
    // proxy: {
    //   "/api": {
    //     //代理路径 例如 https://baidu.com
    //     target: "https://baidu.com",
    //     // 将主机标头的原点更改为目标URL
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   }
    // },
    //启用source-map方便调试
    devtool: 'source-map',
    plugins: [
      //定义全局变量
      new webpack.DefinePlugin({
        'process.env': {
          //这里必须要解析成字符串进行判断，不然将会被识别为一个变量
          NODE_ENV: JSON.stringify('development')
        }
      }),
    ]
  }
})
