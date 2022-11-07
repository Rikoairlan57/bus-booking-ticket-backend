const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/db");
const port = process.env.PORT || 4000;
app.use(express.json());
const usersRoute = require("./routes/usersRoute");
const busesRoute = require("./routes/busesRoute");

app.use("/api/users", usersRoute);
app.use("/api/buses", busesRoute);
app.listen(port, () => console.log(`Server run on port ${port}`));
