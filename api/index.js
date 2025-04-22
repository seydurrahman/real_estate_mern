import express from "express";
import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongDB");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
