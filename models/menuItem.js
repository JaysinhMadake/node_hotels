const mongoose = require('mongoose')

const menuItemsSchema = new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    price:{
        type:Number,
        required: true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    isDrink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    numSales:{
        type:Number,
        default:0
    }
});

const menuItems= mongoose.model("MenusItems",menuItemsSchema)

module.exports=menuItems;