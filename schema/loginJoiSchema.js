const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().min(8).max(50).required(),
  password: Joi.string().min(8).max(24).required(),
});

module.exports = loginSchema;
