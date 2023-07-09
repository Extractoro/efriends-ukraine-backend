const Joi = require("joi");

const facebookSchema = Joi.object({
  facebook: Joi.string().required().max(560),
});

module.exports = { facebookSchema };
