const mongoose = require('mongoose');

//schema creatation
const productSchema = new mongoose.Schema({
    '_id': { type: String, required: true },
    'brand': { type: String, required: true },
    'description': { type: String, required: true },
    'image': { type: String, required: true },
    'name': { type: String, required: true },
    'numberofReviews': { type: Number, required: true },
    'rating': { type: Number, required: true }
})
//model creation 
const Products = mongoose.model("produ", productSchema);
//export the module
module.exports = Products;


