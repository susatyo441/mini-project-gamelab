const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./src/routes/api.js");
const { errorMiddleware } = require("./src/middleware/error-middleware.js");

require("dotenv").config();

const app = express();

// Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(errorMiddleware);

// Routes

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
