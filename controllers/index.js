// Auth
const registrationController = require("./auth/registration");
const loginController = require("./auth/login");
const logoutController = require("./auth/logout");
const registrationConfirmController = require("./auth/registrationConfirm");
const resentVerification = require("./auth/resentVerification");
const updateAvatarController = require("./auth/updateAvatar");

module.exports = {
  registrationController,
  loginController,
  logoutController,
  registrationConfirmController,
  resentVerification,
  updateAvatarController,
};
