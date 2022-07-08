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

const cors = require('cors');

app.use(cors({
    origin: '*'
}));


app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/api/v1/orders", ordersRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/users", usersRouter);



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