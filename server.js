require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

const searchPlant = require("./controllers/searchPlant");

app.use(require("./middleware/headers"));

app.use("/api/search", searchPlant);

if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));

   app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
   );
}

const server = app.listen(5000, console.log("express running"));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
   console.log(`Error: ${err.message}`);

   server.close(() => process.exit(1));
});
