const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    withCredentials: true,
  }),
);

app.use(express.json());

/* require all the routes here */
const authRouter = require("./routes/auth.routes");

/* using al the routes here */
app.use("/api/auth", authRouter);

module.exports = app;
