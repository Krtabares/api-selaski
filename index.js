const express = require("express");
const app = express();
const port = 3000;
const ordersRouter = require("./routes/orders");
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/orders", ordersRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});