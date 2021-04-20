const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },

    image: {
        type: String,
        required : true
    },
    price: {
        type: Number,
        required: true
        
    },
    description: String,
    category: String,
    id : Number




});

module.exports = mongoose.model('Item', itemSchema);

