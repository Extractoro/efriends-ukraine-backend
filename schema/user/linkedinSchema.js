const Joi = require("joi");

const linkedinSchema = Joi.object({
  linkedin: Joi.string().required().max(560),
});

module.exports = { linkedinSchema };
