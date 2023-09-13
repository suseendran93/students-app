const pool = require("./db.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRoutes = require("./student/routes.js");
const app = express();

app.use(express.json());
app.use(bodyParser.json()); //This is a middleware
app.use(cors());

app.use("/api/v1/students", studentRoutes);
app.listen(5000, () => {
  console.log("Server is listening...");
});

pool.connect();
