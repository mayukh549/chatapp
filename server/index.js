const express = require("express");
const dotenv = require("dotenv");
const app = express();
const { default: mongoose } = require("mongoose");
const userRouter = require("./Routes/userRoutes.js");



app.get("/", (req, res) => {
    res.send("api is running");
})
app.use(express.json());
dotenv.config();
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Server is Connected to Database");
    } catch (err) {
        console.log("Server is NOT connected to Database", err.message);
    }
};
connectDb();
// console.log(process.env.MONGODB_URI)
// console.log("jvnkdsjvn")
// console.log(process.env.PORT)
app.use("/user", userRouter);
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log("Server is Running..."));