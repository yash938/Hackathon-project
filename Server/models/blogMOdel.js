const mongoose  = require("mongoose");

const blogSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    description:{
        type:String,
        required:true
    },
    imageUrl:String,
    category:String
})

module.exports = mongoose.model("Blog",blogSchema);