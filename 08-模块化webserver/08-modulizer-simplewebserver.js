const http = require('http')
const router = require('./model/router')
const url = require('url')

http.createServer((request, response)=>{
    let pathname = url.parse(request.url).pathname
    
    // 模块化：把注册登录页面等管理模块抽出：
    if(pathname =='/login') {
        response.end('login')
    }else if(pathname =='/register') {
        response.end('register')
    }else{
        router.static(request, response, 'static')
    }
})
.listen(5001, ()=>console.log(`listen on port 5001`))