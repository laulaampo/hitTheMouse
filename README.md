1.安装vuex

2.npm install node-sass sass-loader --save-dev
找到build中webpack.base.conf.js,在rules中添加scss规则
{
  test: /\.scss$/,
  loaders: ['style', 'css', 'sass']
}

3.npm install sass-resources-loader --save-dev
修改build中的utils.js
将
scss: generateLoaders('sass')
修改为
scss: generateLoaders('sass').concat(
  {
    loader: 'sass-resources-loader',
    options: {
        //你自己的scss全局文件的路径
      resources: path.resolve(__dirname, '../src/style/common.scss')
    }
  }
)

4.rem布局
5.配置eslint