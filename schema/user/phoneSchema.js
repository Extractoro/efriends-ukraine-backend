const Joi = require("joi");

const phoneSchema = Joi.object({
  phone: Joi.number().required(),
});

module.exports = { phoneSchema };
