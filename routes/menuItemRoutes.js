const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/menuItem');

router.post("/",async (req,res)=>{
    try{
    const data = req.body;
    const newMenuItems = new MenuItem(data);
    const response = await newMenuItems.save();
    console.log("data saved");
    res.status(200).json(response);
    }
    catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
    }
})

router.get("/",async (req,res)=>{
    try{
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
    }
    catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error'})
    }
})

   router.put("/:id",async (req,res)=>{
    try{
    const menuId = req.params.id;
    const updatedMenuData=req.body;

    const response=await menuItems.findByIdAndUpdate(menuId,updatedMenuData,{
        new:true,
        runValidators:true,
    }) 

    if(!response){
        return res.status(404).json({error: "Dish not found"});
    }

    console.log("data updated");
    res.status(200).json(response);
    }
    catch(err){
    console.log(err)
    res.status(500).json({error: 'Internal Server Error'})
    }
   })

module.exports=router;