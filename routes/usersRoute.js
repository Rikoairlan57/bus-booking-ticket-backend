const router = require("express").Router();
const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");

// user register

router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findDone({ email: req.body.email });
    if (existingUser) {
      return res.send({
        message: "user alredy exists",
        success: false,
        data: null,
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      message: "user created successfully",
      success: true,
      data: null,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
});
