const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();
const app = express();

// parse application/json
app.use(bodyParser.json());
app.use("/comment", commentRoutes);
app.use("/blog", blogRoutes);
app.use("/user", userRoutes);

mongoose
  .connect(
    `mongodb+srv://abhijain3002:${process.env.MONGOPASSWORD}@cluster0.ol5venw.mongodb.net/`
  )
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((eror) => {
    console.log(eror);
    console.log("Mongodb Failed to Connect");
  });

app.listen(5000, () => {
  console.log("Server is started listening at port 5000.");
});
