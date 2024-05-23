var express = require("express");
var router = express.Router();
const userSchema = require("../Router/user");


const mongoose = require("mongoose");
const contactModel = require("../Router/contact");
const cors = require("cors");


const blog = require("../Router/Blog")
const Admin = require('../Router/admin');
const categoryModel = require("../Router/category");
const commentModel = require("../Router/comment");

// const errorMiddleware = require("../middleware/error-middleware").default;

// MongoDB connection URI
const mongoURI = "mongodb://localhost:27017/Home-Remedies";

// router.use(errorMiddleware)
// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Access the default connection
const db = mongoose.connection;

// Event listeners for MongoDB connection events
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB connected");
});

module.exports = db;


const corsOption ={
  origin:"http://localhost:5173",
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  Credential:true
}






router.use(cors(corsOption))
router.use("/contact",contactModel)
router.use("/user", userSchema);
router.use("/admin",Admin)
router.use("/blog",blog)
router.use("/category",categoryModel)
router.use("/comment",commentModel)

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
