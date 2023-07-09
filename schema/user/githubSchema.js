const Joi = require("joi");

const githubSchema = Joi.object({
  github: Joi.string().required().max(560),
});

module.exports = { githubSchema };
