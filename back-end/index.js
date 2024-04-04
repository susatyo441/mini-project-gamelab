const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./src/routes/api.js");
const { errorMiddleware } = require("./src/middleware/error-middleware.js");
require("dotenv").config();

const path = require('path');

const app = express();

var corsOption = {
  origin: 'https://sambalbagindo.carolynn.my.id'
}

// Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOption));
app.use(router);
app.use(errorMiddleware);

const dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(dirname, 'uploads')));

// Routes

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
