const pool = require("./db.js");
const express = require("express");
const studentRoutes = require("./student/routes.js");
const app = express();

app.use(express.json());

app.use("/api/v1/students", studentRoutes);
app.listen(3000, () => {
  console.log("Server is listening...");
});

pool.connect();
