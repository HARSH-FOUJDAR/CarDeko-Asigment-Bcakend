const express = require("express");

const router = express.Router();

const {
  getRecommendation,
} = require("../Controllers/aiControllers");

router.post("/recommend", getRecommendation);

module.exports = router;