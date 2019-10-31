// 封装09-routeConseal\09-consealRouter-Express-inner-logic-2.js
const url = require('url')

/* 封装http.createServer里的经常写的res.writeHead()和res.end()部分，绑定res的send方法*/ 
Respond = (res) =>{
    res.send = (data) =>{
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.end(data)
        console.log(`success!!!`);
    }
}


const app= ()=>{
    const G = this
    // 处理get和post请求：
    this._get = {}
    this._post = {}

    const app = (req, res) => {
        Respond(res)

        let path=url.parse(req.url).path

        // 获取路由：
        if(!path.endsWith('/')) path=path+'/'
        
        // 获取请求方式：
        const method=req.method.toLowerCase()
        

        if(G[`_${method}`][path]) {
            if(method=='post'){
                // 执行post请求：用res.on方法拿：
                let postStr = ''
                req.on('data', (chunk)=> postStr += chunk)
                req.on('end', (err, chunk) => {
                    console.log(postStr)
                    /*表示拿到post的值*/ 
                    req.body=postStr
                    G[`_${method}`][path](req, res)
                })
            }else{
                G[`_${method}`][path](req, res)
            }
        }else{
            res.end(`<head><meta charset="utf-8"/></head><body><h2>路由不存在</h2></body>`)
        }
    }
    app.get = (str, callback) => {
        if(!str.endsWith('/'))  str=str+'/'
        if(!str.startsWith('/'))  str='/'+str
        G._get[str] = callback
    }
    app.post = (str, callback) => {
        if(!str.endsWith('/'))  str=str+'/'
        if(!str.startsWith('/'))  str='/'+str
        G._post[str] = callback
    }
    return app
}
module.exports = app()



