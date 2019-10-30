const http = require('http')
const router = require('./model/router')
const url = require('url')
const ejs = require('ejs')
const fs = require('fs')

http.createServer((request, response)=>{
    let pathname = url.parse(request.url).pathname
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    
    // 模块化：把注册登录页面等管理模块抽出：
    if(pathname =='/login') {
        const data = `你好我是后台数据msg`
        const list = [111,222,333]

        ejs.renderFile('views/login.ejs', { 
                msg: data,
                list:list
            }, (err, data)=>{
            response.end(data)
        })
    }else if(pathname === '/dologin' && request.method === 'GET'){
        // 1.页面演示get传值：
        console.log(url.parse(request.url, true).query);
        // [Object: null prototype] { username: 'ccdd', password: 'cc' }
        response.end('dologin')

    }else if(pathname == '/dologin' && request.method === 'POST' ){
        let postStr = ''
        request.on('data', chunk => postStr += chunk )
        request.on('end', (err, chunk) =>{
            console.log(postStr);
            fs.appendFile('loginSuccess.txt', `${postStr}\n`, err => {
                if (err) {
                    console.log(err)
                }else{
                    console.log(`写入成功`);
                }
            })
        })
        response.end(`
        <head><meta charset="utf-8"/></head>
        <script>alert('登录成功');history.back();</script>
        `)
    }
    else if(pathname =='/register') {
        const data = `注册页面`
        const h = `<h4>呵呵</h4>`
        ejs.renderFile('views/register.ejs', {
            data,
            h
        }, (err, data)=> response.end(data))
    }else{
        router.static(request, response, 'static')
    }
})
.listen(5001, ()=>console.log(`listen on port 5001`))