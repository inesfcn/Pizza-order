const express = require("express");
const router = express.Router();

const {getPizzas} = require("../controllers/pizzasControllers");

router.route("/").get(getPizzas);

module.exports = router;