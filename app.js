const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const layout = require('./views/layout.js')
const {db} = require('./models')
const app = express();



db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(morgan('dev'))

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.get('/', (req, res) => {
  res.send(layout())
})

module.exports = app;

let port = 1337;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
