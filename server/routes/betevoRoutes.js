const express = require("express");
const {
  getbetevos,
} = require("../controllers/betevoController");


const router = express.Router();

router.get("/test", (req, res) => {
  res.status(200).json({ message: "Hello. Done!" });
});

router.get("/", getbetevos);

module.exports = router;
