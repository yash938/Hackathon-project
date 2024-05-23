const express = require("express");
const User = require("../models/user-model")
const Admin = require("../models/Admin-model")
const Contact = require("../models/contact-model")
const authMiddleware = require('../middleware/auth-middleware')

const router = express.Router();


router.post("/signup",async(req,res)=>{
    try {
        const { username, email, password, contact,isDoctor, registrationNumber  } = req.body;
        const userExist = await Admin.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }
         

        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound) 

        // Create a new user using the userSchema
       const userCreated =  await Admin.create({ username, email, password, contact , isDoctor,
        registrationNumber: isDoctor ? registrationNumber : undefined});

        // Send a success message
        res.status(200).json({ msg: "registration successfully",
            token:await userCreated.generateToken(),
            userId:userCreated._id.toString()
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error" });
        // next(error)
        
    }
})

router.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body;
        const userExist =await Admin.findOne({email})
        console.log(userExist);

        if(!userExist){
            res.status(500).json({ error: "Invalid Credential" });
        }

        // const user = await bcrypt.compare(password, userExist.password)
const user = await userExist.comparePassword(password)

        if(user){
            res.status(200).json({ msg: "login successfully",
            token:await userExist.generateToken(),
            userId:userExist._id.toString()
        });
        }else{
            res.status(500).json({ error: "email or password" });

        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Server error" });
    }
})

router.get("/users",authMiddleware,async(req,res,next)=>{
    try {
        const users = await User.find({},{password:0});
        console.log(users);
        if(!users && users.length === 0){
            res.status(400).json({msg:"no user found"})

        }
        res.status(200).json({users})

    } catch (error) {
        next(error)
    }
})

router.get("/Contact",authMiddleware,async(req,res,next)=>{
 try {
    const contact  = await Contact.find();
    console.log(contact);
    if(!contact && contact.length === 0){
        res.status(400).json({msg:"no contact found"})

    }
    return res.status(200).json({contact})
 } catch (error) {
    next(error)
    
 }
})

module.exports = router;