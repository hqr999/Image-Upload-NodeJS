const {StatusCodes} = require('http-status-codes')
const path = require('path')

const uploadImagemProduto = async(req,res) => {
    const produtoImagem = req.files.imagem 
    const camImagem = path.join(__dirname,'../public/uploads/'+`${produtoImagem.name}`)

    await produtoImagem.mv(camImagem)

    return res.status(StatusCodes.OK).json({image:{src:`/uploads/${produtoImagem.name}`}})
}


module.exports = {
    uploadImagemProduto,
}