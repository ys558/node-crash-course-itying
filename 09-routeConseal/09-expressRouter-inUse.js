const app = require('./09-expressRouter-consealRouter')
const http = require('http')
const ejs = require('ejs')


http.createServer(app).listen(5010, ()=>{console.log(`listen on port 5010`)})

app.get('/login', (req, res)=>{
    ejs.renderFile('./09-expressRouter-inUse-loginForm.ejs', {}, (err, data) =>{
        res.send(data)
    })
})

app.post('/dologin', (req, res)=>{
    console.log(req.body)
    res.send(`<head><meta charset="utf-8"/></head><script>alert('登录成功');history.back();</script>`)
})


app.get('/register', (req, res)=>{
    ejs.renderFile('./09-expressRouter-inUse-registerForm.ejs', {}, (err, data)=>{
        res.send(data)
    })
    
})

