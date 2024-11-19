const app = require("./app.js");
const dotenv = require("dotenv");
const dbConnection = require("./utils/db.js");

dotenv.config();

//port
const PORT = process.env.PORT;

//server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  dbConnection();
});
