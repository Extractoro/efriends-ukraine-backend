const Joi = require("joi");

const authSchema = Joi.object({
  email: Joi.string().min(8).max(50).required(),
  password: Joi.string().min(8).max(24).required(),
  name: Joi.string().min(2).max(18).required(),
});

module.exports = authSchema;
