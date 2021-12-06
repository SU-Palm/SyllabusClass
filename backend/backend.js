const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
//const crypto = require("cyrpto");
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const passport = require("passport");
require("/Users/carlynoleary/Desktop/SyllabusClass/backend/models/model.js");
const File = mongoose.model("file");

const storage = multer.diskStorage({
  destination: "/Users/carlynoleary/Desktop/SyllabusClass/backend/public",
  filename: function(req, file , cb){
    cb(null, "PDF-" + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
}).single("myfile");

const obj =(req,res) => {
  upload(req, res, () => {
     console.log("Request ---", req.body);
     console.log("Request file ---", req.file);//Here you get file.
     const file = new File();
     file.meta_data = req.file;
     file.save().then(()=>{
     res.send({message:"uploaded successfully"})
     })
     /*Now do where ever you want to do*/
  });
}

router.post("/upload", obj);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(require("./routes/api/users"));

// get driver connection
const dbo = require("./db/conn");
 
// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

const db = require("./config/keys").mongoURI;
const { mongoURI } = require("./config/keys");


mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});


