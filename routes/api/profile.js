const express = require("express");
const router = express.Router();

// @route   GET api/profile/test
// @desc    Test profile route
// @access  Public
router.get("/", (req, res) => res.send("Profile Works"));

module.exports = router;
