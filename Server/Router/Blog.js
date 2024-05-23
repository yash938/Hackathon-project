const express = require("express");
const router = express.Router();
const blog = require("../models/blogMOdel")
const mongoose = require("mongoose");





router.post("/",(req,res)=>{
    const newBlog = new blog({
        _id:new mongoose.Types.ObjectId,
        title:req.body.title,
        description:req.body.description,
        category:req.body.category,
        imageUrl:req.body.imageUrl  
    })
newBlog.save()
.then(result=>{
    res.status(200).json({
        new_blog:result
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

router.get("/all",(req,res)=>{
  blog.find().
  select("_id title description category imageUrl")
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

//category to get blog
router.get("/category/:category",(req,res)=>{
    blog.find({category:req.params.category})
    .select("_id title description category imageUrl")
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


//get all blog by id
router.get("/:id",(req,res)=>{
    blog.find({_id:req.params.id})
    .select("_id title description category imageUrl")
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


//delete by id
router.delete("/:id",(req,res)=>{
    blog.deleteOne({_id:req.params.id})
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
    blog.updateOne({_id:req.params.id},req.body)
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


//count blog

router.get("/get/count",(req,res)=>{
    blog.find().countDocuments()
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