const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require('./routes/product.route.js')

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api/products', productRoute)

mongoose
  .connect(
    "mongodb+srv://anilcodes01:anilcodes01@cluster0.kbsq56y.mongodb.net/CRUDapp"
  )
  .then(() => {
    console.log("Connected to database!!");
  })
  .catch((err) => {
    console.log("Database connection failed ", err);
  });



app.get("/", (req, res) => {
  res.send("Hello there, How are you? I am good, what about you?");
});

app.listen(3000, (req, res) => {
  console.log(`Server is running on port 3000...`);
});
