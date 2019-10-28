// 获取后缀名方法：
exports.getMime = (extname) => {
    switch (extname) {
        case '.html':
            return 'text/html'
        case '.css':
            return 'text/css'
        case '.js':
            return 'text/javascript'
        case '.png':
            return ''
        default:
            return 'text/html'
    }
}