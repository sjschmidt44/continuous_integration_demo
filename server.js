'use strict'

require('dotenv').load()

const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const Promise = require('bluebird')
const mongoose = require('mongoose')
const bodyParser = require('body-parser').json()
const debug = require('debug')('cfgram:server')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/cfgram-dev'
const PORT = process.env.PORT || 3000

mongoose.Promise = Promise
mongoose.connect(MONGODB_URI)

const app = module.exports = express()
const router = express.Router()

app.use(cors())
app.use(bodyParser)
app.use(morgan('dev'))
app.use(require('./lib/error-middleware'))
app.use('/api', require('./routes/auth-routes')(router))

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
