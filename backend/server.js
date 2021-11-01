const express = require('express');
const cors = require('cors');
const product = require('./model/produ');
const mongooes = require('mongoose');


//rest object
const app = express();

app.use(cors());

mongooes.connect("mongodb+srv://admin:admin@testcluster.w9ndz.mongodb.net/ecommer-main-pro?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
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

//assing port

app.listen(8080, () => {
    console.log("Server port Number 8080")
})