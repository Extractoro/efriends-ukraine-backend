const authJoiSchema = require("./authJoiSchema");
const loginJoiSchema = require("./loginJoiSchema");
const { User } = require("./userSchema");

module.exports = {
  User,
  authJoiSchema,
  loginJoiSchema,
};
