const fs = require('fs')
const path = require('path')

// 回调函数：第二个参数是一个函数，既是从07-callback-eventEmitter改写06服务器\07-simple-webserver-callback.js接收值，又是将函数里计算得到的值传回调用处：
exports.getContentType = (extname, EventEmitter ) => {
    fs.readFile(path.join(__dirname,'mime.json'), (err, data)=>{
        if (err) {
            console.log(err);
        }else{
            const mimes = JSON.parse(data.toString())
            const contentTypeResult = mimes[extname] || 'text/html'
            EventEmitter.emit('contentTypeResult', contentTypeResult )
            
        }
    })
}