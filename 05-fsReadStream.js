const fs = require('fs')


const readStream=fs.createReadStream('05-fsReadStream.txt')
let str = ''
let count = 0

readStream.on('data', chunk => {
    str += chunk
    count ++
})

readStream.on('end', chunk => {
    console.log(str)
    console.log(count)
})

readStream.on('error', err => console.log(err))

