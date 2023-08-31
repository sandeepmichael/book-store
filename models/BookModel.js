const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    bookname:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    image:{
      type:String,
      required:true,
    },
    price:{
        type:Number,
        required:true,
    }
})

const Books = mongoose.model('Book', BookSchema);

module.exports = Books;