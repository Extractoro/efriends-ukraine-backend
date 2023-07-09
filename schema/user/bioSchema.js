const Joi = require("joi");

const bioSchema = Joi.object({
  bio: Joi.string().required().max(600),
});

module.exports = { bioSchema };
