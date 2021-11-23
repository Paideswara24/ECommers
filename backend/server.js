//express module used to develop the rest api's
const express = require('express');
//Cors module used to enable the cors policy
const cors = require('cors');
//import Model
const product = require('./model/produ');
//mongoose moudle used to connect to the mongodb database
const mongooes = require('mongoose');

//import express-async-handler
const express_async_handler = require("express-async-handler");

//rest object
const app = express();
//Enable the cors policy
app.use(cors());

//MIME type
app.use(express.json());

mongooes.connect("mongodb+srv://admin:admin@testcluster.w9ndz.mongodb.net/ecommer-main-pro?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (err) throw err;
    else {
        console.log("Connection OK")
    }
});

//create rest API
//(client req,res to client )
app.get('/product', async (req, res) => {
    const products = await product.find();
    res.send(products);
})

// assing the ID wise 
app.get("/product/:id", async (req, res) => {
    const productss = await product.findOne(mongooes.Types.ObjectId(req.params.id))
    if (!productss) {
        res.status(400).send({ "message": "Products not avaliable" });
    } else {
        res.status(200).send(productss)
    }
});
//assing port

app.listen(8080, () => {
    console.log("Server port Number 8080")
})