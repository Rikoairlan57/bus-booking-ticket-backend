const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
require("dotenv").config();

app.listen(port, () => console.log(`Server run on port ${port}`));
