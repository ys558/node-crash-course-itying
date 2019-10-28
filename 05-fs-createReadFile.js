/**
 * 文件如果比较大，采用文件流读取文件，分次读取，不会卡死
 */

const fs = require ('fs') 
var fileReadStream = fs .createReadStream('./upload1/input.txt') 
let count =0; 
var str =''; 

fileReadStream .on('data', (chunk) => { 
    console .log(`${ ++ count } 接收到：${chunk.length}`); 
    str +=chunk 
}) 

fileReadStream .on('end', () => { 
    console .log('--- 结束 ---'); 
    console .log( count ); 
    console .log( str );   
})

fileReadStream .on('error', (error) => { 
    console .log(error) 
})