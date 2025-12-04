const express = require('express')
const router = express.Router();

const { criaProduto,pegaTdsProdutos } = require('../controllers/productController')
const { uploadImagemProduto } = require('../controllers/uploadsController')

router.route('/').post(criaProduto).get(pegaTdsProdutos)
router.route('/uploads').post(uploadImagemProduto)


module.exports = router