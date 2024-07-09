const express = require("express");
const {
    loginController,
    registerController,
} = require("../Controllers/userController.js");
const Router = express.Router();

Router.post("/login", loginController);
Router.post("/register", registerController);

module.exports = Router;
