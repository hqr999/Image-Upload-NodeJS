const {StatusCodes} = require('http-status-codes')

const uploadImagemProduto = async(req,res) => {
    console.log(req)
    res.send('Upload da imagem do produto')
}


module.exports = {
    uploadImagemProduto,
}