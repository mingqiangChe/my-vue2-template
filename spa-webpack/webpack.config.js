const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
module.exports={
  module: {
    rules: [{
        test: /\.css$/,
        use: ["style-loader",{
          loader:'css-loader?modules',
        }],
      }],
  },
  plugins: [
    new WebpackDeepScopeAnalysisPlugin(),
  ],
}
