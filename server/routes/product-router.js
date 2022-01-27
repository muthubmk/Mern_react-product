const express = require('express')

const productCtrl = require('../controllers/product-ctrl')

const router = express.Router()

router.post('/product_insert',productCtrl.productInsert)

router.get('/productget',productCtrl.productget)

router.post('/productupdate',productCtrl.productupdate)

router.post('/productdelete',productCtrl.deleteproduct)

module.exports = router