const http = require('http')

// 回调函数内可执行所有操作：
http.createServer((req, res) =>{
    let postData = ''
    req.setEncoding('utf8')

    // 利用事件监听和回调函数实现功能：
    // 监听data事件:
    req.on('data', chunk => postData += chunk)
    req.on('end', ()=> res.end(postData))
}).listen(8800, 'localhost', ()=> console.log('listen on 8800'))