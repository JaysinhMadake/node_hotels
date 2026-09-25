// //import mongoose which is used to connect mongodb server with node js server
// const mongoose=require('mongoose')

// //define the mongoDb connection url
// //replace 'mydatabase' with your database name
// const mongoURL='mongodb://localhost:27017/hotels' 

// //set up mongodb connection
// mongoose.connect(mongoURL)

// //get default connection
// //mongoose maintains a default connection object representing the mongoDb connection
// const db=mongoose.connection;

// //define event listeners for database connection
// db.on('connected',()=>{
//     console.log("Connected to the mongoDb server");
// })

// db.on('error',(error)=>{
//     console.log("MongoDB connection error "+error);
// })

// db.on('disconnected',()=>{
//     console.log("MongoDB disconnected");
// })

// module.exports=db;


//Fresh preactice
const mongoose = require('mongoose');

const mongoURL="mongodb://localhost:27017/restaurent"
mongoose.connect(mongoURL)

const db=mongoose.connection

db.on("connected",()=>{
    console.log("connected to mongoDB server");
})

db.on("error",(error)=>{
    console.log("Error came:"+error);
})

db.on("disconnected",()=>{
    console.log("Disconnected mongoDB server");
})

module.exports=db;
