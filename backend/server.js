const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false}))

//Connect to Database
mongoose.connect("mongodb+srv://nickkaramas:1392002@cluster0.vka7qgf.mongodb.net/Crud")
.catch((err) => console.log(err));

//Require Routes
 app.use('/', require("./Routes/postRoute"))


const port = process.env.PORT||3001;

app.listen (port, function(){
    console.log(`Server Up at:${port}`);
})