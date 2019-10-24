
const http=require('http')
const url = require('url')


/*
request 获取url信息   （request）
response 浏览器返回响应信息 （response）
* */
 
//1.用http模块创建服务
http.createServer((request,response) => {
    // 2. 浏览器输入 localhost:8001/news?aa=11 ：
    // 普通request.url会打印出地址后面一整坨东西：
    // console.log(request.url);
    // /news?aa=11

    // 2.1 用url.parse()处理:
    const result = url.parse(request.url)
    console.log(result);
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: '?aa=11',
    //     query: 'aa=11',
    //     pathname: '/news',
    //     path: '/news?aa=11',
    //     href: '/news?aa=11' }
    
    response.writeHead(200,{"Content-Type":"text/html"});
    // 字符集是 utf-8,在这里设置：要不乱码
    response.write('<head><meta charset="utf-8"/></head>');
    response.write('cbuw');
    response.end(); /*结束响应*/
}).listen(8001, '127.0.0.1', ()=> console.log(`listen on port 8001`));

// 3. 自启动工具用法：npm install -g supervisor
// 使用 supervisor 代替 node 命令启动应用: supervisor 01-http-url-superVisior.js