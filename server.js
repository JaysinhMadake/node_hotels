// const express= require('express')
// const app=express();
// const db=require('./db');

// app.get('/',function(req,res){
//     res.send("hello welcome to our hotel!!!")
// })

// app.listen(3000,()=>{
//     console.log("Listening on port 3000");
// });

//Practice server
const express = require('express');
const app = express();
const db = require("./db")
const Person = require("./models/person");

//middleware
app.use(express.json());

const menuItemRoutes = require('./routes/menuItemRoutes')

app.use('/menuItems',menuItemRoutes);
app.use('/:id',menuItemRoutes);

app.listen(3000,()=>{
    console.log("Server running on the port number 3000");
});