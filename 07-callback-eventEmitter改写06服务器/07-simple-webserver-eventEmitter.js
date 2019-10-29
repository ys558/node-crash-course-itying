const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const contentType = require('./model/getContentType-eventEmitter')

const events = require('events')
const EventEmitter = new events.EventEmitter()

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
                contentType.getContentType(extname, EventEmitter)
                EventEmitter.on('contentTypeResult', contentTypeResult => {   
                    response.writeHead(200, {'Content-Type': contentTypeResult })
                })
                response.write(data)
                response.end()
            }
        })
    }

})
.listen(5001, ()=>{
    console.log(`listen on port 5001`);
})
// .setMaxListeners(1000);