const express = require("express");
const router = express.Router();

//test route
router.post("/", (req, res) => {
    res.status(200).send("yikes");
});

module.exports = router;