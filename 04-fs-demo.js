const fs = require('fs')

// 判断是否有该目录，没有则创建：（图片上传）
// fs.stat('upload', (err, stats)=>{
//     if(err){
//         fs.mkdir('upload', err => {
//             if (err) console.log(err)
//             console.log(`没有该目录，已创建`)
//         })
//     }else{
//         console.log(`该目录已存在`)
//     }
// })

// 找出/upload1下所有目录和文件，并打印出来
var fileArr = []
fs.readdir('upload1', (err, file) => {
    if(err) {console.log(err)}
    else{
        // for (let i in file) {
        //     console.log(file[i])
        //     fs.stat(`upload1/${file[i]}`, (err, stats)=>{
        //         if(err) {
        //             console.log(err)
        //             return false
        //         }else{
        //             // console.log(stats.isDirectory())
        //             if(stats.isDirectory()){
        //                 fileArr.push(file[i])
        //             }
        //         }
        //     })
        // }
        file.every()
    }
})
// console.log(fileArr)

// const filesArr = []
// fs.readdir('upload1', (err, flie) => {
//     if(err) {console.log(err)}
//     else{
//         (function getFile(i){
//             fs.stat
//         }(0))
//     }
// })