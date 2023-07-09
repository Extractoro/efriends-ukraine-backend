const Joi = require("joi");

const locationSchema = Joi.object({
  location: Joi.string().required().max(560),
});

module.exports = { locationSchema };
