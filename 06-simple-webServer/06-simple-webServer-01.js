const http = require('http')
// const url = require('url')
const fs = require('fs')

http.createServer((request, response) => {


    const pathName = request.url

    // 过滤请求：
    if (pathName !== '/favicon.ico') {
        // console.log(pathName)
        fs.readFile(`./static/${pathName}`, (err, data) => {
            if (err) {
                console.log(`404`)
                return;
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' })
                response.write(data)
                response.end()
            }
        })
    }
})
.listen(5000, ()=> console.log(`on port 5000 to serve`))