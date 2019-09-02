var path = require('path')

//导入在内存中生成 HTML 页面的插件
//只要是插件，都一定要放到 plugin 节点中去
var htmlWebpackPlugin = require('html-webpack-plugin')

//安装了最新版本vue-loader  15.2.0（最新的vue-loader 15+以上，要求使用VueLoaderPlugin，需要变更webpack配置文件）
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, './src/main.js'), //入口文件，即要打包的文
  output: {   //输出文件的相关配置
    path: path.join(__dirname, './dist'),  //指定打包好的文件，输出到哪个目录
    filename: 'bundle.js'     //这是指定输出文件的名称 

  },
  plugins: [  //配置插件的节点
    new htmlWebpackPlugin({  //创建一个在内存中生成 HTML 页面的插件
      template: path.join(__dirname, './src/index.html'),   //指定模板页面
      filename: 'index.html'   //指定生成页面的名称
    }),
    new VueLoaderPlugin()   // 新版Vue-loader 请确保引入这个插件！
  ],
  module: {  //配置 第三方模块 加载器 的节点
    rules: [
      //处理css、less、scss样式的loader
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      //处理 图片路径的loader
      { test: /\.jpg|png|gif|jpeg|bmp|ttf$/, use: ['file-loader'] },
      

      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      //配置babel 来转换高级的ES语法

      { test: /\.vue$/, use: 'vue-loader' } //配置vue
    ]
  },
  resolve: {
    alias: {
      //修改vue被导入时 包的路径
      "vue$": "vue/dist/vue.js"
    }
  }

}



//使用webpack-dev-server这个工具，来实现自动打包编辑的功能
//运行npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖 
//注意：在本地项目中必须先安装webpack ---   npm i webpack -D

//webpack-dev-server帮我们打包生成的 bundle.js 文件 托管到了电脑的内存中，所以在项目根目录中，根本找不到这个打包好的 bundle.js
//即， 在个目录中有一个虚拟的、看不见的 bundle.js 文件