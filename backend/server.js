const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const uuid4 = require('uuid4')
const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

app.get('/channels', (req, res) => {
  db.all('SELECT channel FROM channels ORDER BY rowid', function (err, rows) {
    res.json({
      channels: rows.map(({ channel }) => channel)
    })
  })
})

app.get('/messages/:channel', (req, res) => {
  const { channel } = req.params
  db.all(`SELECT channel, message, timestamp, uuid FROM messages 
   WHERE channel = ?
   ORDER BY rowid DESC `,
    channel, function (err, rows) {
      res.json({ channel, messages: rows })
    })
})

app.post('/:channel', (req, res) => {
  const { channel, message } = req.body
  const values = {
    channel,
    message,
    timestamp: new Date().toLocaleString(),
    uuid: uuid4()
  }

  db.run('INSERT INTO messages (channel, message, timestamp, uuid) VALUES( ?,	?, ?, ?)',
    Object.values(values), () => res.json(values))
})

module.exports = () => app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})