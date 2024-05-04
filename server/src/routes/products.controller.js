const { getProducts } = require("../models/products.model")

const httpGetProducts = async (req, res) => {
  if (!req.query.keyword) {
    return res.status(400).json({ error: 'Search keyword is required' })
  }

  const { keyword } = req.query

  const products = await getProducts(keyword)
  .catch((err) => {
    console.error(err)
    return res.status(500).json({ error: 'Internal server error' })
  })

  res.status(200).json(products)
}

module.exports = { 
  httpGetProducts 
}