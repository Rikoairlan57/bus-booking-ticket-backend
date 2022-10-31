const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
require("dotenv").config();
const db = require("./config/db");

app.listen(port, () => console.log(`Server run on port ${port}`));
