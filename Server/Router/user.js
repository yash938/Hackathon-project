const express = require("express");
const router = express.Router();
const userSchema = require("../models/user-model");
const bcrypt = require("bcrypt")
const signupSchema = require("../validator/auth.validator")
const validate = require("../middleware/validate-middleware")
const authMiddleware = require("../middleware/auth-middleware")

router.post("/register", validate(signupSchema),async (req, res) => {
    try {
        const { username, email, password, contact } = req.body;
        const userExist = await userSchema.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }
         

        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound) 

        // Create a new user using the userSchema
       const userCreated =  await userSchema.create({ username, email, password, contact });

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
});



router.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body;
        const userExist =await userSchema.findOne({email})
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



router.get("/users",authMiddleware,(req,res)=>{
    try {
        const userData = req.user;
        console.log(userData)
        res.status(200).json({
            userData
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            err:error
        })
    }
})


module.exports = router;
