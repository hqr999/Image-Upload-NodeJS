const {StatusCodes} = require('http-status-codes')
const path = require('path')
const CustomError = require('../errors')




const uploadImagemProduto = async(req,res) => {
    if(!req.files){
        throw new CustomError.BadRequestError('Nenhum arquivo foi dado upload')
    }
    
    
    const produtoImagem = req.files.imagem
    if(!produtoImagem.mimetype.startsWith('image')){
        throw new CustomError.BadRequestError('Por favor dê upload em uma imagem')
    }

    const tamanhoMax = 100000 

    if(produtoImagem.size > tamanhoMax){
        throw new CustomError.BadRequestError('Por favor dê upload em uma imagem menor do que 1KB')
    }



    const camImagem = path.join(__dirname,'../public/uploads/'+`${produtoImagem.name}`)

    await produtoImagem.mv(camImagem)

    return res.status(StatusCodes.OK).json({image:{src:`/uploads/${produtoImagem.name}`}})
}


module.exports = {
    uploadImagemProduto,
}