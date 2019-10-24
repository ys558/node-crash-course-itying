// fs文件操作模块

const fs= require('fs')
const path = require('path')

// 1. fs.stat  检测是文件还是目录
fs.stat('02-commonjs', (error, stats)=>{
    if(error) {
        console.log(error)
        return false
    }
    console.log(stats)
    // 打印出目标的详细资料：
//     Stats {
//         dev: 3032835051,
//         mode: 16822,
//         nlink: 1,
//         uid: 0,
//         gid: 0,
//         rdev: 0,
//         blksize: undefined,
//         ino: 1125899906889839,
//         size: 0,
//         blocks: undefined,
//         atimeMs: 1571901050765.6326,
//         mtimeMs: 1571898630891.2847,
//         ctimeMs: 1571898630891.2847,
//         birthtimeMs: 1571897687915.2651,
//         atime: 2019-10-24T07:10:50.766Z,
//         mtime: 2019-10-24T06:30:30.891Z,
//         ctime: 2019-10-24T06:30:30.891Z,
//         birthtime: 2019-10-24T06:14:47.915Z }
    console.log(`文件：${stats.isFile()}`)
    // 文件：false
    console.log(`目录：${stats.isDirectory()}`)
    // 目录：true
})


// // 2. fs.mkdir创建目录
// //   接收参数：
// //   path            将创建的目录路径
// //   mode          目录权限（读写权限），默认0777
// //   callback      回调，传递异常参数err
// fs.mkdir('log', error => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(`创建目录成功`)
//     }
// })


// 3. fs.writeFile 写入文件 ！！！如果文件不存在，则会报错
//filename      (String)            文件名称
//data        (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。
//options        (Object)           option数组对象，包含：
    //- encoding   (string)            可选值，默认 ‘utf8′，当data是buffer时，该值应该为 ignored。
    //- mode         (Number)        文件读写权限，默认值 438
    //- flag            (String)            默认值 ‘w'
    //- callback {Function}  回调，传递一个异常参数err。

// fs.writeFile(
//     path.join(__dirname, '/fsModuleDemo', 'hehe.txt'),
//     `这是要写入的内容
//         呵呵~
//     `,
//     error => {
//         if (error) {
//             console.log(error)
//         }else{
//             console.log(`写入成功`)
//         }
//     }
// )


// // 4. fs.appendFile 追加文件,多用于日志,如果文件不存在，则会创建
// fs.appendFile(
//     path.join(__dirname, '/fsModuleDemo', 'hehe.txt'),
// `\n这些内容追加在了
//     //3. fs.writeFile 写入文件
// 的内容的后面`,
//     error => {
//         if (error) throw error;
//         console.log(`追加成功`)
//     }
// )


// // 5. fs.readFile 读取文件
// fs.readFile(
//     path.join(__dirname, '/fsModuleDemo', 'hehe.txt'),
//     'utf-8',
//     (err, data) => {
//         if(err) console.log(err)
//         console.log(data)
//     }
// )


// // 6. fs.readdir 读取目录
// fs.readdir('fsModuleDemo',(err, data)=>{
//     if (err) console.log(err)
//     console.log(data)
//     // [ 'hehe.txt' ]
// })


// 7. fs.rename 1、重命名；2、剪切移动文件
// 7.1 改名：
// fs.rename(
//     path.join(__dirname, '/fsModuleDemo', 'hehe.txt'),
//     path.join(__dirname, '/fsModuleDemo', 'haha.txt'),
//     err => { if (err) {console.log(err)} else{console.log(`改名成功`)}
// )
// 7.2 剪切文件：
// fs.rename(
//     path.join(__dirname, '/fsModuleDemo', '改名后的文件.txt'),
//     path.join(__dirname, '/fsModuleDemo/用来装剪切过来的文件', '改名后的文件.txt'),
//     err => { if (err) {console.log(err)}
//     else{console.log(`剪切文件成功`)}}
// )


// // 8. fs.rmdir  删除空目录
// fs.rmdir('要删除的目录', err => {
//     if (err) {
//         console.log(err)
//     }else{
//         console.log(`删除成功`)
//     }
// })


// // 9. fs.unlink 删除文件
// const file = `_要删除 的文件.txt`
// fs.unlink(`logs/${file}`, 
//     err => {
//         if (err){console.log(err)
//             }else{
//                 console.log(`成功删除了${file}`)
//         }}
// )