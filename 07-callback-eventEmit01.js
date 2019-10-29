const fs = require('fs')

const events = require('events')
// // 01 非阻塞i/o：
// console.log(`1`)

// fs.readFile('./07-callback-eventEmit.json', (err, data)=>{
//     console.log(`2`);
// })

// console.log(`3`);

// // 以上输出：
// // 1
// // 3
// // 2

/**
 * 这种直接return的不适合非阻塞i/o：
 */
// 2 外部拿到回调里的data: 
// const getMime = () => {
//     fs.readFile('./07-callback-eventEmit.json', (err, data)=>{
//         return data.toString()
//     })
// }

// console.log(getMime())
// // 输出：
// // undefined

// // 2.1 解决方法1：传入一个新的回调函数：将上面要执行的操作console.log()直接放在函数的返回值里：这样就能在外部应用到回调的data
// const getMime2 = (callback) => {
//     fs.readFile('./07-callback-eventEmit.json', (err,data)=>{
//         callback(data)
//     })
// }

// // 调用处：把上面封装处的整个函数，放回调用的地方，在回调函数里写回结果
// getMime2( callback => {
//     console.log( callback.toString() )
// })


// 2.2 解决方法2：events模块:
const EventEmitter = new events.EventEmitter('to_mime', data =>{
    console.log(data);
})
// 2.2.1 利用EventEmitter广播和接收广播
// 2.2.2：发送广播.emit()
setTimeout(() => {
    EventEmitter.emit('to_mime', '发送的数据')
}, 1000)
// 2.2.3：监听广播.on()
EventEmitter.on('to_mime', data => {
    // console.log(`接收到广播事件`)
    console.log(data) 
})

// 2.3利用events模块改写callback的方法见07-callback-eventEmit02.js
