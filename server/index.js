const express = require("express");
const dotenv = require("dotenv");
const app = express();
app.get("/",(req,res)=>{
    res.send("api is running");
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log("Server is Running..."));