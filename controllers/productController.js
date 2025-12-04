const Produto = require('../models/Product')
const { StatusCodes } = require('http-status-codes')

const criaProduto = async(req,res) => {
    console.log(req.body)
    const prod = await Produto.create(req.body)
    res.status(StatusCodes.CREATED).json({prod})
}


const pegaTdsProdutos = async(req,res) => {
    const produtos = await Produto.find({})
    res.status(StatusCodes.OK).json(produtos)
}

module.exports = {
    criaProduto,
    pegaTdsProdutos,
}