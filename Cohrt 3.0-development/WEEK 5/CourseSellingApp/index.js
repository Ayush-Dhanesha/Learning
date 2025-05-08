const express = require('express');
const mongoose = require('mongoose');

const {userRouter} = require('./Routes/user');
const {courseRouter} = require('./Routes/course');
const {adminRouter} = require('./Routes/admin');

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
  try {
    await mongoose.connect("mongodb+srv://adlonelyking:Ayush123@cluster0.yogfj.mongodb.net/courseSellingApp");
    console.log("connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}


