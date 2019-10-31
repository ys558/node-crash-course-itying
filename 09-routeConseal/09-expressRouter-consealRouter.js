// 封装09-routeConseal\09-consealRouter-Express-inner-logic-2.js
const url = require('url')

const app= ()=>{
    const G = this
    const app = (req, res) => {
        let path=url.parse(req.url).path

        if(!path.endsWith('/')) path=path+'/'
    
        if(G[path]) { 
            G[path](req, res)
        }else{
            res.end(`<head><meta charset="utf-8"/></head><body><h2>路由不存在</h2></body>`)
        }
    }
    app.get = (str, callback) => {
        if(!str.endsWith('/'))  str=str+'/'
        if(!str.startsWith('/'))  str='/'+str
        G[str] = callback
    }
    return app
}
module.exports = app()



