const http = require('http')
// const url = require('url')
const fs = require('fs')
const path = require('path')
const mime = require('./model/getmime')

// console.log('测试：',mime.getMime('index.css'))

http.createServer((request, response) => {


    const pathName = request.url
    const extname = path.extname(pathName)

    // 过滤请求：
    if (pathName !== '/favicon.ico') {
        // console.log(pathName)
        fs.readFile(`./static/${pathName}`, (err, data) => {
            if (err) {
                console.log(`404`)
                fs.readFile('./static/404.html', (err, data404) => {
                    response.writeHead(404, {
                        'Content-Type': `text/html; charset='utf-8'`
                    })
                    response.write(data404)
                    response.end()
                })
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' })
                response.write(data)
                response.end()
            }
        })
    }
})
    .listen(5000, () => console.log(`on port 5000 to serve`))

