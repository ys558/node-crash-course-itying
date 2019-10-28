/**
 * 文件如果比较大，采用文件流读取文件，写入流方式写入，分次读取，不会卡死
 */


const fs = require ('fs')
const data = `待写入数据\n`
const writeStream = fs.createWriteStream('./upload1/output.txt')

writeStream.write(data, 'utf8')
writeStream.on('finish', ()=>{
    console.log('写入完成')
})

// 标记写入完成：
writeStream.on('end')

