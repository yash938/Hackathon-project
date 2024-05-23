const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(404).json({
            msg: "Unauthorized HTTP, token not provided"
        });
    }

    const jwtToken = token.replace("Bearer", "").trim();

    try {
        const isVerified = jwt.verify(jwtToken, "yash sharma keys");

        const userData = await User.findOne({ email: isVerified.email }).select({
            password: 0
        }).exec();

        console.log(userData);
        req.user = userData;
        req.token = token;
        req.userId =userData._id
        next();
    } catch (error) {
        return res.status(200).json({
            message: "Unauthorized, invalid token"
        });
    }
};

module.exports = authMiddleware;
