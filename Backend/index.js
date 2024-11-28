const app = require("./app");
const dotenv = require("dotenv");
const dbConnection = require("./utils/db.js");
dotenv.config();

//PORT
const PORT = process.env.PORT;

// SERVER
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    dbConnection();
})