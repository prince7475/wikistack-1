const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const app = express();

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
  res.send('Hello world!')
})

module.exports = app;

let port = 1337;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
