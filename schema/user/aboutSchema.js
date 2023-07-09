const Joi = require("joi");

const aboutSchema = Joi.object({
  about: Joi.string().required(),
});

module.exports = { aboutSchema };
