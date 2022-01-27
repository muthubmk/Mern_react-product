
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Products = new Schema(
    {
          product_name: { type: String, required: true },
          product_link: { type: String, required: true },
          price: { type: String, required: true },
    },
      {collection: 'productdata'} 

)

module.exports = mongoose.model('productdata', Products)