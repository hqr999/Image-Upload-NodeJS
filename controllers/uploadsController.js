const {StatusCodes} = require('http-status-codes')

const uploadImagemProduto = async(req,res) => {
    res.send('Upload da imagem do produto')
}


module.exports = {
    uploadImagemProduto,
}