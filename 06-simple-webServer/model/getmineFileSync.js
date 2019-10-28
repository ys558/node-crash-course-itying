exports.getMime = function(fs, extname) {
//  改成同步后：
    const data = fs.readFileSync('./model/mime.json')
    const Mimes = JSON.parse(data.toString())
    return Mimes[extname] || 'text/html'
}