const express = require("express");
const app = express();
const cron = require("node-cron");
const dotenv = require("dotenv");
const dbConnection = require("./utils/db.js");
const { sendDeatilsProspectEmail } = require("./EmailServices/sendDetailsProspect.js");
const { sendEligibilityEmail } = require("./EmailServices/sendEligibilityEmail.js");
const { sendBloodDonationReminder } = require("./EmailServices/sendBloodDonationReminder.js");
const { sendDonorDetailsEmail } = require("./EmailServices/sendDonorDetailsEmail.js");
dotenv.config();

// scedule task

const run = () => {
  cron.schedule("* * * * * *", () => {
      sendDeatilsProspectEmail();
      sendEligibilityEmail();
      sendBloodDonationReminder();
      sendDonorDetailsEmail();
  });
};

run();

//server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  dbConnection();
  console.log(`Background Services running on port ${PORT}`);
});
