const express = require('express')
const router = require('./router')

const app = express()
app
  .use('/views/', express.static('./views'))
  .use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') // 任意域名都可以访问，这样写不能携带cookie
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS') // 设置方法
    // 在正常的请求之前，会发送一个验证，是否可以请求
    req.method == 'OPTIONS' ? res.send(200) : next()
  })
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(router)
  .listen(3000, () => {
    console.log('Sever is started, running at localhost:3000......')
  })