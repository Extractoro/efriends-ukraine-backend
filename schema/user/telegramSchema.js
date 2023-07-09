const Joi = require("joi");

const telegramSchema = Joi.object({
  telegram: Joi.string().required(),
});

module.exports = { telegramSchema };
