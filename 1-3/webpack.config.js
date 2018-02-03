const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    //javascript 执行入口文件
    entry: path.resolve(__dirname, './main.js'),
    output: {
        //将依赖的模块全部打到一个文件中：bundle.js
        filename: 'bundle.js',
        //输出到dist目录下
        //path.resolve是将一个字符解析到一个绝对路径中
        path: path.resolve(__dirname, './dist')
    },
    //loader加载时顺序是从右到左的的，且基本都支持使用查询方式添加参数
    module: {
        rules: [
            {
                //loader可以看成文件转换功能的翻译员
                //使用正则匹配需要使用该loader转换的文件
                test: /\.css$/,
                //css-loader,使你使用类似@import和url(...)的方法实现require的功能，style-loader将所有的计算后的样式加入页面中，
                // 二者组合在一起使你能够把样式表嵌入webpack打包后的js文件中。
                //引用《入门webpack》中的原文：css-loader使你能够使用类似@import和url（...）的方法实现require的功能，style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的js文件中。

                // 因此，我们这样配置后，遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件，遇到“@import”等语句就将相应样式文件引入（所以如果没有css-loader，就没法解析这类语句），最后计算完的css，将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里。

                // 需要注意的是，loader是有顺序的，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签。因此应该把style-loader放在css-loader的前面（webpack loader的执行顺序是从右到左）。
                // use: ['css-loader'],
                use: ExtractTextPlugin.extract({
                    // 转换.css文件需要的Loader
                    use: ['css-loader?minimize'],
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            //从.js文件中提取出来的.css文件的名称
            filename: `[name]_[contenthash:8].css`,
        })
    ]
}