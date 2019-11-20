const http = require('http')
const ejs = require('ejs')
const app = require('./09-expressRouter-consealRouter')
const url = require('url')

const MongoClient = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017'
const dbName = 'node-course-itying'
const client = new MongoClient(dbUrl, {useNewUrlParser:true});
// MongoDB自带断言语句：检查错误：
const assert = require('assert')

http.createServer(app).listen(5010, ()=> console.log(`本地，端口5010`))

app.get('/', (req, res)=>{
    const msg = `后台数据`
    ejs.renderFile('./views/index.ejs', {msg}, (err, data)=> res.send(data))
})

app.get('/add', (req, res)=>{
    client.connect((err)=>{
        assert.equal(null, err)
        console.log(`连接数据库成功`)
        const db = client.db(dbName)

        // 增加数据：
        db.collection('user').insertOne({
            name: '11111',
            gender: 'F',
            scoure: 34
        }, (error, result)=>{
            if (error) {
                console.log(error)
                console.log(`增加数据失败`)
                return
            }
            res.send('增加数据成功')
        })
    })
})

app.get('/edit', (req, res)=>{
    
    // res.send('修改数据成功')

    client.connect(err =>{
        assert.equal(null, err)
        console.log(`连接数据库成功`)
        const db = client.db(dbName)
        db.collection('user').updateOne(
            {name: '大地'},{$set:{age: 40}},
            (err, result) =>{
                // 断言失败：
                assert.equal(err, null)
                // 断言成功：
                assert.equal(1, result.result.n)
                // result: { n: 1, ok: 1 }, 


                // if (err) {
                //     console.log(err)
                //     console.log(`修改数据失败`)
                //     return
                // }
                res.send('修改数据成功')
            }
        )
    })
})

app.get('/del', (req, res)=>{
    let query = url.parse(req.url, true).query
    let name = query.name

    client.connect(err =>{
        assert.equal(null, err)
        console.log(`连接数据库成功`)
        const db = client.db(dbName)
        db.collection('user').deleteOne({name: name }, 
            (err, result)=>{
                assert.equal(err, null)
                assert.equal(1, result.result.n)
                console.log(result)
                res.send('数据库删除成功')
        })
    })
})