const express = require('express');
const router = new express.Router();
const controller = require('./controller')
const {validateRegistration} = require('./request')

router.get("/", controller.checkHealth)
router.post("/register", validateRegistration, controller.register)
router.post("/salaries", controller.storeSalary)

module.exports = router