const Product = require('../models/product_model')

productInsert = (req, res) => {
    const body = req.body
    console.log(body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a product',
        })
    }

var collection = {
                  product_name: body.name,
                  product_link: body.link,
                  price:body.price,
            }
    const product = new Product(collection)

    if (!product) {
        return res.status(400).json({ success: false, error: err })
    }

    product
        .save()
        .then(() => {
            return res.status(201).json({ visible:"true",color:"success",message:"product upload success " })
          })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not upload!',
            })
        })
}

productget = async (req, res) => {
    console.log("qqqqqqqq")
    await Product.find({}, (err, product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!product.length) {
            return res
                .status(404)
                .json({ success: false, error: `Product not found` })
                }
        return res.status(200).json({ success: true, data: product })
    }).catch(err => console.log("s",err))
   }



  productupdate = async (req, res) => {
    const body = req.body

      console.log("pharmacy",body)
    if (!body) {
         return res.status(400).json({
            success: false,
            error: 'You must provide a product',
        })
    }
Product.findOne({ _id: req.body.id }, (err, user) => {
     if (err) {
            return res.status(404).json({
                err,
                message: 'update not found!',
            })
           }
 Product.updateOne({_id: req.body.id},
              {
              $set: {
                  product_name: body.name,
                  product_link: body.link,
                  price:body.price,
               }
            },
      (chg, update) => {

            if (chg) {
            return res.status(400).json({
                error,
                message: 'not upload!',
            })
              }
else{
  return res.status(201).json({ visible:"true",color:"success",message:"product upload success " })
}
 })
})
}

deleteproduct = async (req, res) => {
    await Product.findOneAndDelete({ _id: req.body.id }, (err, product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!product) {
           return res.status(400).json({
                err,
                message: 'not delete!',
            })
        }

       return res.status(201).json({ visible:"true",color:"success",message:"delete successfully " })
    }).catch(err => console.log(err))
}


module.exports = {
    productInsert,
    productget,
    productupdate,
    deleteproduct
 }