// 加入http模块后封装：
const http = require('http')
const url = require('url')

// Express基本原理：将http.createServer()里的回调函数直接抽出来封装，如下：
const G = {}

const app = (req, res) => {
    let pathname=url.parse(req.url).pathname

    if(!pathname.endsWith('/')) pathname=pathname+'/'

    if(G[pathname]) {
        G[pathname](req, res) /**执行注册的方法 */
    }else{
        res.end(`<head><meta charset="utf-8"/></head><body><h2>路由不存在</h2></body>`)
    }
}

// 定义get方法：
app.get = (str, callback) => {
    if(!str.endsWith('/'))  str=str+'/'
    if(!str.startsWith('/'))  str='/'+str

    /* ！！！！最关键的一步： */
    G[str] = callback
}

// // 之前的写法：http.createServer()里的回调函数可以用上面的app代替：
// http.createServer((req, res)={}).listen(5001, ()=>console.log(`listen on port 5001`))
// // 只要有请求，就会触发app的方法：
http.createServer(app).listen(5008, ()=>console.log(`listen on port 5008`))


// 执行get方法：
app.get('login', (req, res) =>{
    console.log(`/login router`)
    res.end('<head><meta charset="utf-8"/></head><body><h2>login页面</h2></body>')
})

app.get('register', (req, res)=>{
    console.log(`/register router`)
    res.end(`<head><meta charset="utf-8"/></head><body><h2>register页面</h2></body>`)
})
