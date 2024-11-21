const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth.js");
const donorRoute = require("./routes/donor.js");
const prospectRoute = require("./routes/prospect.js");

module.exports = app;

// cors
app.use(cors());

//json
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("api/v1/donors", donorRoute);
app.use("api/v1/prospects", prospectRoute);
