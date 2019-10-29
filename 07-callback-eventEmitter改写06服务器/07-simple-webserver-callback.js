const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const contentType = require('./model/getContentType-callback')

http.createServer((request, response)=>{
    const pathName = url.parse(request.url).pathname
    const extname = path.extname(pathName)

    if(pathName !== '/favicon.ico') {
        fs.readFile(`./static/${pathName}`, (err, data)=>{
            if (err) {
                fs.readFile(`./static/404.html`, (err, data404) =>{
                    response.writeHead(404, {'Content-Type': 'text/html'})
                    response.write(data404)
                    response.end()
                })
            }else{
                // 1. 回调：把07-callback-eventEmitter改写06服务器\model\getContentType.js封装的整个函数，放在调用的地方，第二个参数既是传值，又是接收值，并将要执行的其他步骤放在函数里执行：
                contentType.getContentType(extname, (contentTypeResult) => {
                    response.writeHead(200, { 'Content-Type': contentTypeResult })
                    response.write(data)
                    response.end()
                })
            }
        })
    }

})
.listen(5001, ()=>{
    console.log(`listen on port 5001`);
})