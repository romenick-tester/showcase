const express = require("express");
const router = express.Router();
const { registerUser, getAllUsers, loginUser } = require("../controllers/usersControllers");

router
    .route("/")
    .get(getAllUsers)
    .post(registerUser);

router
    .route("/login")
    .post(loginUser);

module.exports = router;