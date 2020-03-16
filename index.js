const express = require('express')
const path = require('path')
const hoganMiddleware = require('hogan-middleware')

const indexRouter = require('./routes/index');

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMiddleware.__express)
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter);

app.listen(3000)

console.log('Server is running on http://localhost:3000');