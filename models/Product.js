const mongoose = require('mongoose')

const Produto_Schema = new mongoose.Schema({
    nome:{
        type:String,
        required:true,
    },
    preco:{
        type:Number,
        required:true,
    },
    imagem:{
        type:String,
        required:true,
    },
})



module.exports = mongoose.model('Produto',Produto_Schema)