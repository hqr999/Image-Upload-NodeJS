const Produto = require('../models/Product')
const { StatusCodes } = require('http-status-codes')

const criaProduto = async(req,res) => {
    console.log(req.body)
    const prod = await Produto.create(req.body)
    res.status(StatusCodes.CREATED).json({prod})
}


const pegaTdsProdutos = async(req,res) => {
    res.send('Lista completa de produtos')
}

module.exports = {
    criaProduto,
    pegaTdsProdutos,
}