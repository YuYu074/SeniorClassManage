const express = require('express')
const router = express.Router()
const { findById, findByName, save, update, deleteById } = require('./student')
router
  .get('/', (req, res) => {
    res.redirect('/student')
  })
  .get('/student', (req, res) => {
    const { regNum } = req.query
    findById(regNum).then(student => res.status(200).send(student), err => res.status(500).send(err))
  })
  .get('/student/name', (req, res) => {
    const { name } = req.query
    findByName(name).then(student => res.status(200).send(student), err => res.status(500).send(err))
  })
  .post('/student/new', (req, res) => {
    const student = req.body
    save(student).then(e => res.status(200).send({ msg: '操作成功，受影响数据条数为：' + e.affectedRows }), err => res.status(500).send(err))
  })
  .post('/student/update', (req, res) => {
    const student = req.body
    update(student).then(e => res.status(200).send({ msg: '操作成功，受影响数据条数为：' + e.affectedRows }), err => res.status(500).send(err))
  })
  .get('/student/delete', (req, res) => {
    deleteById(req.query.regNum).then(e => res.status(200).send({ msg: '操作成功，受影响数据条数为：' + e.affectedRows }), err => res.status(500).send(err))
  })

module.exports = router
