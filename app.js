

const express = require("express");
const app = express();
const bodyp = require("body-parser");
const https = require("https");
const port = process.env.port || 3000;
const router = express.Router();
app.use("/api/work" , router);

app.use(bodyp.urlencoded({extended:true}));


const info = [{
  "slackUsername": "Haji Salim",
  "backend": true,
  "age": 23,
   "bio": "I have passion for programming"
}]

app.get("/" , function(req,res){
  res.json(info);
});













app.listen(port , function(){
  console.log("Server is runing at port 3000!");
})
