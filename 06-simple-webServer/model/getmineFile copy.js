exports.getMime = function(fs, extname) {
    console.log(`1`);
    fs.readFile('./model/mime.json', (err, data)=>{
        if (err) {
            console.log(`mime.json文件不存在:
${err}`);
        }else{
            const Mimes = JSON.parse(data.toString())
            // console.log(Mimes[extname]);
            // 但在这return的话就变成异步：需要改成同步：
            console.log(`2`);
            return Mimes[extname] || 'text/html'
        }
    })
    console.log(`3`);
}
// 以上代码输出：但我们希望执行的是1 2 3，所以要改成同步，见06-simple-webServer\model\getmineFileSync.js
// 1
// 3
// 2