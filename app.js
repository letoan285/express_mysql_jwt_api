require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const productRouter = require("./api/products/product.router");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
