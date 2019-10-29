const http = require('http')
const router = require('./model/router')
const url = require('url')
const ejs = require('ejs')

http.createServer((request, response)=>{
    let pathname = url.parse(request.url).pathname
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    
    // 模块化：把注册登录页面等管理模块抽出：
    if(pathname =='/login') {
        const data = `你好我是后台数据msg`
        const list = [1,2,3,4,5]

        ejs.renderFile('views/login.ejs', { 
                msg: data,
                list:list
            }, (err, data)=>{
            response.end(data)
        })
    }else if(pathname =='/register') {
        response.end('register')
    }else{
        router.static(request, response, 'static')
    }
})
.listen(5001, ()=>console.log(`listen on port 5001`))