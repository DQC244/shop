const router = require("express").Router();
const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");

// update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("you have deleted...");
  } catch (e) {
    res.status(500).json(err);
  }
});

// get user
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...orther } = user._doc;
    res.status(200).json(orther);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all user
router.get("/", verifyTokenAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    if (query) {
      const users = await User.find().sort({ _id: -1 }).limit(5);
      res.status(200).json(users);
    } else {
      const users = await User.find();
      res.status(200).json(users);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
