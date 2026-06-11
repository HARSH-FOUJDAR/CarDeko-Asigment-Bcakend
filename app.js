require("dotenv").config();
const express = require("express");
const Database = require("./Database/db");
const Recondation = require("./Routes/Recondation.Route");
const aiRoutes = require("./Routes/aiRoutes");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

app.use("/Cardata", Recondation);
app.use("/ai", aiRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to CarDeko API" });
});

Database();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Start on Port");
});
