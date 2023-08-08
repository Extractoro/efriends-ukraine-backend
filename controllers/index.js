// Auth
const registrationController = require("./auth/registration");
const loginController = require("./auth/login");
const logoutController = require("./auth/logout");
const registrationConfirmController = require("./auth/registrationConfirm");
const resentVerification = require("./auth/resentVerification");
const updateAvatarController = require("./auth/updateAvatar");
const getCurrent = require("./auth/getCurrent");

// user
const changeNameController = require("./user/changeNameController");
const changeAboutController = require("./user/changeAboutController");
const changeBioController = require("./user/changeBioController");
const changeFacebookController = require("./user/changeFacebookController");
const changeGithubController = require("./user/changeGithubController");
const changeLinkedinController = require("./user/changeLinkedinController");
const changeLocationController = require("./user/changeLocationController");
const changePhoneController = require("./user/changePhoneController");
const changeTelegramController = require("./user/changeTelegramController");
const changeTwitterController = require("./user/changeTwitterController");
const changeWebsiteController = require("./user/changeWebsiteController");

// post
const addPostController = require("./post/addController");
const getAllPostsController = require("./post/getAllController");
const editPostController = require("./post/editPostController");
const deletePostController = require("./post/deletePostController");
const editAddPhotoPostController = require("./post/editAddPhotoPostController");
const editDeletePhotoPostController = require("./post/editDeletePhotoPostController");
const updateFavoriteController = require("./post/updateFavoriteController");

module.exports = {
  registrationController,
  loginController,
  logoutController,
  registrationConfirmController,
  resentVerification,
  updateAvatarController,
  getCurrent,
  changeNameController,
  changeAboutController,
  changeBioController,
  changeFacebookController,
  changeGithubController,
  changeLinkedinController,
  changeLocationController,
  changePhoneController,
  changeTelegramController,
  changeTwitterController,
  changeWebsiteController,
  addPostController,
  updateFavoriteController,
  editDeletePhotoPostController,
  editAddPhotoPostController,
  deletePostController,
  editPostController,
  getAllPostsController,
};
