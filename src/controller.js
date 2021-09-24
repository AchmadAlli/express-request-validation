const { validationResult } = require('express-validator')


function checkHealth(req, res, next){
  return res.status(200).send({
    "status": "OK",
    "message": "application work"
  })
}

async function register(req, res, next) {
  return res.status(200).send({
    "message": "OK",
    "data": req.body
  })
}

module.exports = {
  register,
  checkHealth
}