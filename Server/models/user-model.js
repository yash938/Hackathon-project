const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
})


userSchema.pre("save",async function(){
    // console.log("pre.method",this)
    const user = this;

    if(!user.isModified("password")){
        next()
    }

    try {
        const saltRound  = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password,saltRound)

        user.password = hash_password;
    } catch (error) {
        console.log(error)
        res.status(404).json({
            err:error
        })
    }

})

userSchema.methods.comparePassword  = async function(password){
    return bcrypt.compare(password,this.password)
}


userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
        "yash sharma keys",
        {
            expiresIn: "365d"
        }
        );
    } catch (error) {
        console.log(error);
        throw error; // Throw the error to handle it in the calling function
    }
};



module.exports = mongoose.model("User",userSchema)