/* 数据操作文件模块，只负责处理数据，不关心业务 */
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Yuyang000',
  port: '3306',
  database: 'stu'
})
connection.connect()

/**
 * @description get student list by regNum
 * @param {Number} id
 * @returns {Promise} Promise
 */
function findById(id) {
  return new Promise((resolve, reject) => {
    const sql = id ? 'select * from student where regNum =' + id : 'select * from student'
    connection.query(sql, (err, res) => err ? reject(err.message) : resolve(res))
  })
}

/**
 * @description get student by name
 * @param {String} name
 * @returns {Promise} Promise
 */
function findByName(name) {
  return new Promise((resolve, reject) => {
    const sql = 'select * from student where name like' + '"%' + name + '%"'
    connection.query(sql, (err, res) => err ? reject(err.message) : resolve(res))
  })
}

/**
 * @description add a student and save in database
 * @param {Object} student
 * @returns {Promise} Promise
 */
function save(student) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO student (name,regNum,major) VALUES(?,?,?)'
    const { name, regNum, major } = student
    connection.query(sql, [name, regNum, major], (err, res) => err ? reject(err.message) : resolve(res))
  })
}

/**
 * @description update student and save in database
 * @param {Object} student
 * @returns {Promise} Promise
 */
function update(student) {
  return new Promise((resolve, reject) => {
    const { regNum, homeworkScore, finalDesignScore, absence, isEliteMenber } = student
    const sql = 'UPDATE student SET homeworkScore = ?,finalDesignScore = ?,absence = ?,isEliteMenber = ? WHERE regNum =' + regNum
    connection.query(sql, [homeworkScore, finalDesignScore, absence, isEliteMenber], (err, res) => err ? reject(err) : resolve(res))
  })
}

/**
 * @description delete a student and save in database
 * @param {Number} id
 * @returns {Promise} Promise
 */
function deleteById(regNum) {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM student WHERE regNum =' + regNum
    connection.query(sql, (err, res) => err ? reject(err) : resolve(res))
  })
}

module.exports = {
  findById,
  findByName,
  save,
  update,
  deleteById
}
