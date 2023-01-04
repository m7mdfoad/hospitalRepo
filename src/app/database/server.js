const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongo = require("mongoose");
const app = express();

var db = mongo.connect("mongodb+srv://root:root@cluster0.r2ifets.mongodb.net/HospitalManager", function (err, response) {
    if (err) { console.log(err); }
    else {
        console.log('Connected to ' + db, ' + ', response);
    }
})


app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200').
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, PATCH, DELETE').
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type').
        res.setHeader('Access-Control-Allow-Credentials', true);
})

//create data schema:
var Schema = mongo.Schema;

const UsersSchema = new Schema({
    name: String,
    id: Number,
    birthday: Date,
    username: String,
    password: String,
    gender: String,
    type: String
}, { versionKey: false });

var model = mongo.model("users", usersSchema, "users");

app.post("/api/SaveUser", function (req, res) {
    var mod = new model(req.body);
    if (req.body.mode == "Save") {
        mod.save(function (err, data) {
            if (err) {
                res.send(err);
            }
            else {
                res.send({
                    data: "User has been inserted successfully"
                });
            }

        })
    } else {
        model.findByIdAndUpdate(req.body.id, {
            id: req.body.id,
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            type: req.body.type,
            birthday: req.body.birthday,
            gender: req.body.gender
        }, function (err, data) {
            if (err) {
                res.send(err);
            }
            else {
                res.send({
                    data: "User has been updated successfully"
                })
            }
        })
    }
});
app.post("/api/DeleteUser", function (req, res) {
    model.remove({
        __id: req.body.id
    } , function(err){
            if(err){
                res.send(err);
            }else{
                res.send({
                    data: " User has been removed."
                })
            }
    })
})

app.get("/api/user/getUserById", function(req,res){
    model.find({}, function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
})


app.listen(3000, function () {
    console.log("server is running on 3000")
})