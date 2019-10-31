// 封装：
// const app = {
//     // login:
//     login: (req, res) => {
//         console.log(111);
//     }
// }

// 执行：
// app.login(`req`)
// app['login'](`req`)

const routes = {
    login : (request, response) => {
        console.log('login');
        response.end('login')
    },
    register : (request, response) => {
        console.log('register')
        response.end('register')
    },
    home : (request, response) => {
        console.log('home')
        response.end('home')
    }

}

module.exports = routes