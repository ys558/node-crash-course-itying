const fs = require('fs')

const data = '我是数据，在被写入并保存起来\n'

const writeStream = fs.createWriteStream('./05-fsWriteStream.txt')

writeStream.write(data, 'utf8')

// 标记写入完成：
writeStream.end()

