const express = require("express");
const router = express.Router();

const contactModel = require("../models/contact-model")



router.post("/",async(req,res)=>{
    try {
        const response = req.body
        await contactModel.create(response)
        res.status(200).json({
            msg:"message send successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            err:"message send failed"
        })
    }
})

module.exports = router;