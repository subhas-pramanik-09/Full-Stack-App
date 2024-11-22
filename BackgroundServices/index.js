const express = require("express");
const app = express();
const cron = require("node-cron");
const dotenv = require("dotenv");
const dbConnection = require("./utils/db.js");
dotenv.config();

// scedule task

const run = () => {
  cron.schedule("* * * * * *", () => {
    console.log("running a task every second");
  });
};

run();

//server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  dbConnection();
  console.log(`Background Services running on port ${PORT}`);
});
