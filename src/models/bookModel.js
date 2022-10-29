const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String,
    require:true},
    price: {
        indianPrice: String,
        europePrice: String
    },
    year:{
        type:Number,
        default:2021
    }, 
    tags: [String],//array of string
    authorName: String,
    totalPages:Number,
    isPublished:Boolean,
    stockAvailable: Boolean
    
    //sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('BookData', bookSchema)