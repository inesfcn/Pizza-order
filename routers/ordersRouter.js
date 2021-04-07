const express = require("express");
const router = express.Router();

const { getOrders } = require("../controllers/ordersControllers");

router.route("/").get(getOrders);

module.exports = router;