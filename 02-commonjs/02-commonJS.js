// 1.普通模块文件引入，必须加路径:
const foo=require('./foo')
// 2. 放在/node_modules,即内置模块文件夹根目录下的引入，不需要路径：
// ！！！但是，sup.js文件在exports时，必须module.exports，不能省略module
const sup= require('sup')
// 3. 放在/node_modules的文件夹里的模块需要引入，必须该文件夹下的 package.json 入口文件 "main": "nav.js"
// 3.1 package.json文件生成命令：npm init -y
const nav = require('nav')

console.log(foo.fooStr)
console.log(sup.supStr)
console.log(nav.navStr)