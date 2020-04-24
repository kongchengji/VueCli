const path = require('path');
const webpack = require('webpack');
//这是在内存中生成html的插件
const htmlWebpackPlugin = require('html-webpack-plugin');
//因为vue-loader，15的版本需要再添加plugin的配置。
const  { VueLoaderPlugin } = require('vue-loader')

 
module.exports = {
  publicPath: './' ,
  chainWebpack: config => {
    lintOnSave:false,

    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }]),
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 10240 }))

  }
}