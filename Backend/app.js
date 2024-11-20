const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth.js");

module.exports = app;

// cors
app.use(cors());

//json
app.use(express.json());

app.use("/api/v1/auth", authRoute);
