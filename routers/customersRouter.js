const express = require("express");
const router = express.Router();

const {signupCustomer,  loginCustomer } = require("../controllers/customersControllers");

router.route("/").post(signupCustomer);

router.route("/login").post(loginCustomer)

module.exports = router;