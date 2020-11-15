const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'keke',
  database: 'test'
})

db.connect(err => {
  if (err) throw err
  let i = 0
  while (i < 10) {
    const user = { name: `User ${i + 14}` };
    db.query('INSERT INTO users SET ?', user, (err, res) => {
      if (err) throw err;
    });
    i++
  }


  console.log('Connected to mysql')
})

// Pagination middleware
const paginatedResults = model => (req, res, next) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
  console.log(page, limit);

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results = {}

  db.query(`SELECT COUNT(id) AS length FROM ${model}`, (err, rows) => {
    if (err) throw err
    const length = rows[0].length

    results.total = length

    if (endIndex < length) {
      results.next = {
        page: page + 1,
        limit
      }
    }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
        limit
      }
    }
  })

  db.query(`SELECT * FROM ${model} LIMIT ${startIndex}, ${limit}`, (err, rows) => {
    if (err) throw err
    results.results = []
    rows.forEach(data => results.results.push({ id: data.id, name: data.name }))
    res.paginatedResults = results
    next()
  })
}

app.get('/users', paginatedResults('users'), (req, res) => {
  res.json(res.paginatedResults)
})

app.listen(5000)