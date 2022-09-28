const express = require('express');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();
const multer=require("multer")
const PORT = process.env.PORT || 3000

app.use(express.json());

app.use(multer().any())


mongoose.connect("mongodb+srv://princekumar-2:ZNmRphvSvecrtzBV@cluster0.yibukmr.mongodb.net/Group-53?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"), err => console.log(err))

app.use('/', route);


app.listen(PORT, function () {
    console.log('Express app running on port ' + PORT)
});
