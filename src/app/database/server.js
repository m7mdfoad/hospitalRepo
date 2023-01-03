const express = require("express");
const app=express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://root:root@cluster0.r2ifets.mongodb.net/HospitalManager")
  
//create data schema:

const usersSchema = {
    name:String,
    id:Number,
    birthday:Date,
    username:String,
    password:String,
    gender:String,
    type:String
}

const Users=mongoose.model("users", usersSchema);

app.get("/", function(req,res){
    console.log(__dirname);
    res.sendFile(__dirname+ "/index.html");
})

app.post("/", function(req, res){
    let users= new Users({
        id:req.body.id,
        name:req.body.name,
        username: req.body.username,
        password:req.body.password,
        type:req.body.type,
        birthday:req.body.birthday,
        gender:req.body.gender

    })
    users.save();
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("server is running on 3000")
})