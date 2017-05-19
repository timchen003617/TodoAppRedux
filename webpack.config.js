const { resolve } = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: resolve(__dirname, 'src/entries/index.html'),
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // 开启 React 代码的模块热替换(HMR)

    'webpack-dev-server/client?http://localhost:3000',
    // 为 webpack-dev-server 的环境打包代码
    // 然后连接到指定服务器域名与端口

    'webpack/hot/only-dev-server',
    // 为热替换(HMR)打包好代码
    // only- 意味着只有成功更新运行代码才会执行热替换(HMR)

    resolve(__dirname, 'src/entries/index.js')
    // entries 入口檔案
  ],
  // 告诉 webpack 解析模块时应该搜索的目录。
  // 如果你想要添加一个目录到模块搜索目录，此目录优先于 node_modules/ 搜索：
  resolve: {
    modules: [resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // 設定使用babel-loader載入js及jsx
        use: ['babel-loader'],
        include: /src/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules'],
        include: /src/,
        exclude: /node_modules/
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        loader: 'file-loader',
        options: {name: 'images/[name].[ext]'}
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
    // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)
  },

  devtool: 'inline-source-map',
  // 啟動開發測試用 server 設定（不能用在 production）
  devServer: {
    hot: true,
    // 開啟server的模塊熱替换(HMR)
    host: 'localhost',
    port: 3000,
    contentBase: resolve(__dirname, 'dist'),
    // 输出文件的路径
    historyApiFallback: true,
    // Configuring the Fallback URL for React Router
    publicPath: '/'
    // 和上文 output 的“publicPath”值保持一致
  },

  plugins: [
    // 开启全局的模块热替换(HMR)
    new webpack.HotModuleReplacementPlugin(),

    // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    /* For the most efficient Webpack production build,
    / make sure to include these plugins in your production configuration */
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin(),

    HTMLWebpackPluginConfig

  ]
}
