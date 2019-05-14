const express = require("express");
const router = express.Router();

// @route   GET api/profile/auth
// @desc    Test profile route
// @access  Public
router.get("/", (req, res) => res.send("Auth Works"));

module.exports = router;
