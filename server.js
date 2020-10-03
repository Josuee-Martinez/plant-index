require("dotenv").config();
const express = require("express");

const app = express();

const searchPlant = require("./controllers/searchPlant");

app.use(require("./middleware/headers"));

app.use("/api/search", searchPlant);

const server = app.listen(5000, console.log("express running"));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);

  server.close(() => process.exit(1));
});
