const expresss = require('express')
const { httpGetProducts } = require('./products.controller')

const productsRouter = expresss.Router()

productsRouter.get('/', httpGetProducts)

module.exports = {
  productsRouter
}