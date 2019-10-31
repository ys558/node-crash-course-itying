const app = require('./09-expressRouter-consealRouter')
const http = require('http')

http.createServer(app).listen(5010, ()=>{console.log(`listen on port 5010`)})

app.get('/login', (req, res)=>{
    res.end(`<head><meta charset="utf8"></meta></head><body><h2>login route</h2></body>`)
    console.log(`login router success`)
})