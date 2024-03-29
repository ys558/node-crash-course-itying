const http = require('http')
// const url = require('url')
const fs = require('fs')
const path = require('path')
const mime = require('./model/getmime')
const url = require('url')


http.createServer((request, response) => {

    // 定义获取到的资源是什么类型：利用url模块的.pathname功能：
    const pathName = url.parse(request.url).pathname
    const extname = path.extname(pathName)

    // 过滤请求：
    if (pathName !== '/favicon.ico') {
        fs.readFile(`./static/${pathName}`, (err, data) => {
            if (err) {
                
                fs.readFile('./static/404.html', (err, data404) => {
                    response.writeHead(404, {
                        'Content-Type': `text/html; charset='utf-8'`
                    })
                    response.write(data404)
                    response.end()
                })
            } else {
                // 页面虽然能出来，但仍有缺陷，图片类型无法处理：见06-simple-webServer\06-simple-webServer-03.js
                response.writeHead(200, { 'Content-Type': mime.getMime(extname) })
                response.write(data)
                response.end()
            }
        })
    }
})
    .listen(5000, () => console.log(`on port 5000 to serve`))

