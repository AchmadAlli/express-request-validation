function checkHealth(req, res, next){
  return res.status(200).send({
    "status": "OK",
    "message": "application work"
  })
}

async function register(req, res, next) {
  return {
    "message": "OK",
    "data": req
  }
}

async function storeSalary(req, res, next){
  return {
    "message": "OK",
    "data": req
  }
}


module.exports = {
  register,
  storeSalary,
  checkHealth
}