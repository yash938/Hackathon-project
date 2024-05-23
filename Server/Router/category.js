const express = require("express");
const router = express.Router();
const category = require("../models/categorymodel")
const mongoose = require("mongoose");





router.post("/",(req,res)=>{
    const newCategory = new category({
        _id:new mongoose.Types.ObjectId,
       name:req.body.name,
        imageUrl:req.body.imageUrl  
    })
newCategory.save()
.then(result=>{
    res.status(200).json({
        new_category:result
    })
} )
.catch(error=>{
    console.log(error)
    res.status(400).json({
        err:error
    })
})
})


//get all blogs

router.get("/",(req,res)=>{
  category.find().
  select("_id name imageUrl")
  .then(result=>{
    res.status(200).json({
        blog:result
    })
  }).catch(error=>{
    console.log(error)
    res.status(400).json({
        err:error
    })
  })
})






//delete by category
router.delete("/:id",(req,res)=>{
    category.deleteOne({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            blogByID:result
        })
    })
    .catch(error=>{
        console.log(error)
        res.status(400).json({
            err:error
        })
    })
})



//update post
router.put("/:id",(req,res)=>{
    category.updateOne({_id:req.params.id},req.body)
    .select("_id title description category imageUrl")
    .then(result=>{
        res.status(200).json({
            blogUpdated:result
        })
    })
    .catch(error=>{
        console.log(error)
        res.status(400).json({
            err:error
        })
    })
})

//count category

router.get("/get/count",(req,res)=>{
    category.find().countDocuments()
    .then(result=>{
        res.status(200).json({
            total:result
        })
    })
    .catch(error=>{
        console.log(error)
        res.status(400).json({
            err:error
        })
    })
})
































module.exports=router;








