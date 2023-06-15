const app = require("./app");
require("dotenv").config();
const mongoose = require("mongoose");

const { MONGO_URL, PORT = 3000 } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT);
    console.log(`Database connection successful on port: ${PORT}`);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
