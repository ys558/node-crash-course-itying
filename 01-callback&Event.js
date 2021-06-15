const http=require('http')
const url = require('url')

// node特性1：回调函数，所有操作均可在回调函数中进行： 
// 1.利用http模块创建服务：
// req 获取浏览器地址栏的URL信息   （request）
// res 服务器返回响应信息 （response）
http.createServer((req,res) => {
    // 2. 浏览器输入 localhost:8001/news?aa=11 ：
    console.log(req.url);

    // 2.1 用url.parse()处理: 
    const result = url.parse(req.url)
    console.log(result);
    
    // 
    // 1. 方法1: 设置字符集utf-8
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    // 2. 方法2: 设置字符集utf-8
    // res.write('<head><meta charset="utf-8"/></head>');
    res.write('你好 Node');
    res.end(); /*结束响应*/
}).listen(8001, '127.0.0.1', /* 127.0.0.1为默认值，可省略 */ 
()=> console.log(`listen on port 8001`));

// 3. 自启动工具用，可以实现热更新：npm install -g supervisor
// 使用 supervisor 代替 node 命令启动应用: supervisor 01-callback&Event.js