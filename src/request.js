const { body, validationResult } = require('express-validator')

const validateRegistration = [
  body('name', "name is required").exists(),
  body('username', "username is required").exists(),
  body('email', "invalid email").isEmail(),
  body('phone').optional().isInt().isLength({
    min: 11,
    max: 13
  }),
  body('password', "password is required").exists(),
  body('password', "weak password").isStrongPassword(),
  body('repassword', 'Password confirmation is incorrect').exists().custom(checkPassword),
  validate
];

function checkPassword(value, {req}){
  return value === req.body.password
}

function validate(req, res, next){
  const err = validationResult(req);
  if(!err.isEmpty()){
    return res.status(422).send({ errors: err.array()})
  }  
  next()
}

module.exports = {
  validateRegistration, 
  validateSalary
}