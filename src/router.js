const express = require('express');
const router = new express.Router();
const controller = require('./controller')

router.get("/", controller.checkHealth)
router.post("/register", controller.register)
router.post("/salaries", controller.storeSalary)

module.exports = router