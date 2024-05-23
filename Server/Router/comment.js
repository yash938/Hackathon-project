const express = require("express");
const router = express.Router();
const comment = require("../models/commentModel")

const mongoose = require("mongoose");





router.post("/",(req,res)=>{
    const newComment = new comment({
        _id:new mongoose.Types.ObjectId,
       email:req.body.email,
        comment:req.body.comment ,
        blogId:req.body.blogId
    })
newComment.save()
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
  comment.find().
  select("_id email comment blogId")
  .then(result=>{
    res.status(200).json({
        comments:result
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
    comment.deleteOne({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            commentsDeleted:result
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
    comment.updateOne({_id:req.params.id},req.body)
    .select("_id title description category imageUrl")
    .then(result=>{
        res.status(200).json({
            commentUpdated:result
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

router.get("/get/count/:blogId",(req,res)=>{
    comment.find({blogId:req.params.blogId}).countDocuments()
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








