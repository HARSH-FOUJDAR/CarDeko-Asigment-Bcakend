const express = require("express");
const router = express.Router();

const { getCars } = require("../Controllers/Recomad.Controller");

router.get("/",getCars);

module.exports = router;
