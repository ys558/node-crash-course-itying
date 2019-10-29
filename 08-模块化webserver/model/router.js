const fs = require('fs')
const path = require('path')
const url = require('url')

const getContentType = (extname, callback) => {
    fs.readFile('./mime.json', (err, data)=>{
        if (err) {
            console.log(err);
        }else{
            const mimes = JSON.parse(data.toString())
            const contentTypeResult = mimes[extname] || 'text/html'
            callback(contentTypeResult)
        }
    })
}

exports.static = (request, response, staticpath ) => {
    let pathName = url.parse(request.url).pathname
    
    if(pathName == '/') {
        pathName = '/index.html'
    }
    const extname = path.extname(pathName)

    if(pathName !== '/favicon.ico') {
        fs.readFile(`${staticpath}/${pathName}`, (err, data)=>{
            if (err) {
                fs.readFile(`${pathName}/404.html`, (err, data404) =>{
                    response.writeHead(404, {'Content-Type': 'text/html'})
                    response.write(data404)
                    response.end()
                })
            }else{
                getContentType(extname, (contentTypeResult) => {
                    response.writeHead(200, { 'Content-Type': contentTypeResult })
                    response.write(data)
                    response.end()
                })
            }
        })
    }

}

