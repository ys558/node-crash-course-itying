// Express路由基本原理：
const G = {}

const app= (req, res) => {
    if(G['login']) {
        G['login'](req, res) /**执行注册的方法 */
    }
}

// 定义get方法：
app.get= (str, callback) => {
    // callback调用会上面的方法：G['login'](req, res)
    G[str] = callback
}

// 执行get方法：
app.get('login', (req, res) =>{
    console.log(`login:${req}`);
})

// 客户端触发调用：
setTimeout(()=>{
    app('req','res')
},1000)