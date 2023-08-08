const authJoiSchema = require("./authJoiSchema");
const loginJoiSchema = require("./loginJoiSchema");
const { User, Posts } = require("./userSchema");

module.exports = {
  User,
  Posts,
  authJoiSchema,
  loginJoiSchema,
};
