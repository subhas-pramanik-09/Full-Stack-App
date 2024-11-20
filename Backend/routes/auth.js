const express = require("express");
const { loginUser, registerUser } = require("../controllers/auth.js");
const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

module.exports = router;
