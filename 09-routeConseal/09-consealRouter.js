const http = require('http')
const url = require('url')
const ejs = require('ejs')
const fs = require('fs')
const routes = require('./model/model.js')

// routes['login']('111', '2')

http.createServer((request, response)=>{
    response.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});

    let path = url.parse(request.url).pathname.replace('/', '')

    if(path !== 'favicon.ico') {
        try {
            routes[path](request, response)
        }catch (err) {
            routes['home'](request, response)
        }
    }

})
.listen(5001, ()=>console.log(`listen on port 5001`))