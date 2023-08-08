const Joi = require("joi");

const addPostSchema = Joi.object({
  text: Joi.string().required(),
});

module.exports = addPostSchema;
