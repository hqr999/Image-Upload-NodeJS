const Produto = require('../models/Product')
const {StatusCodes} = require('http-status-codes')

const criaProduto = async(req,res) => {
    res.send('Produto criado')
}


const pegaTdsProdutos = async(req,res) => {
    res.send('Lista completa de produtos')
}

module.exports = {
    criaProduto,
    pegaTdsProdutos,
}