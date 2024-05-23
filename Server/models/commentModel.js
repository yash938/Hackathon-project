const mongoose  = require("mongoose");

const commentSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:String,
    comment:String,
    blogId:String,
    timeStamp:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("Comment",commentSchema);