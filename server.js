let express = require("express");
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let axios = require('axios');
let mongoose = require('mongoose');
let Item = require('./models/item');
require('dotenv').config();


const atlasUrl = process.env.MongoURL;
mongoose.connect(atlasUrl, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/items', async (req, res) => {
    try {
        let data = await Item.find({}).limit(10);
        //console.log(data);
        res.status(200).send(data);
        

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
})

app.get("/items/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let data = await Item.findById(id);
        res.status(200).send(data);
        
    } catch (error) {
        res.status(500).send("Server Error");
    }
})

app.get('/add-items', async (req, res) => {
    try {

        let axiosResponse = await axios.get("https://fakestoreapi.com/products");
        let data = axiosResponse.data;
        data.forEach(async (ele) => {
            let item = new Item({ ...ele });
            await item.save();
        })



        
    } catch (error) {
        res.status(500).send("Server Error");
    }
})


if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}




app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started");
})