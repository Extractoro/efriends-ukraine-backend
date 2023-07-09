const Joi = require("joi");

const websiteSchema = Joi.object({
  website: Joi.string().required(),
});

module.exports = { websiteSchema };
