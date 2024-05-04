const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const { productsRouter } = require('./src/routes/products.router')

const app = express()

app.use(helmet())
app.use(express.json())
app.use(cors())

app.use('/scrape', productsRouter)

module.exports = {
  app
}