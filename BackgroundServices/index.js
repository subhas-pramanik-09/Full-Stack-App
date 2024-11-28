const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cron = require('node-cron');
const dbConnection = require("./utils/db.js");
const { sendDetailsProspectEmail } = require("./EmailServices/sendDetailsProspect.js");
const { sendEligibilityEmail } = require("./EmailServices/sendEligibilityEmail.js");
const { sendDonorDetailsEmail } = require("./EmailServices/sendDonorDetailsEmail.js");
const { sendBloodDonationReminder } = require("./EmailServices/sendBloodDonationReminder.js");
dotenv.config();

// SERVER
const PORT =  process.env.PORT;

// SCHEDULE TASK

const run = () =>{
    cron.schedule('* * * * * *', () => {
        sendDetailsProspectEmail();
        sendEligibilityEmail();
        sendBloodDonationReminder();
        sendDonorDetailsEmail();
   });
}

run();

app.listen(8001, () =>{
    console.log(`Backgroundservices is running on 8001`);
    dbConnection();
})