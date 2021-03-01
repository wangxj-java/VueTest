/**
 * 使用commonjs模块化语法
 * 向外暴露一个配置对象
 */
const path = require('path')//node 内置
const HtmlWebpackPlugin = require('html-webpack-plugin') //构造函数

//__dirname全局变量，当前文件所在目录的据对路径
module.exports = {
    mode: 'development' ,
    //入口
    entry: './src/index.js' ,
    //出口
    output: {
        path: path.resolve(__dirname,'dist'), //dist的绝对路径
        filename: 'bundle.js'
    },
    //模块加载器
    module: {
        rules: [ //内部配置loader

        ]
    },
    //插件
    plugins: [ //插件实例对象
        new HtmlWebpackPlugin({
            //指定谁为模板
            template: 'index.html' //在执行命令所在目录找
        })
    ]
}