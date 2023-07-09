const Joi = require("joi");

const twitterSchema = Joi.object({
  twitter: Joi.string().required(),
});

module.exports = { twitterSchema };
