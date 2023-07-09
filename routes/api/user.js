const express = require("express");
const router = express.Router();
const controllers = require("../../controllers");
const controllersWrapper = require("../../helpers/controllersWrapper");
const { authMiddleware } = require("../../middlewares");

router.use(authMiddleware);

router.post(
  "/change_name",
  controllersWrapper(controllers.changeNameController)
);

router.post(
  "/change_about",
  controllersWrapper(controllers.changeAboutController)
);

router.post("/change_bio", controllersWrapper(controllers.changeBioController));

router.post(
  "/change_facebook",
  controllersWrapper(controllers.changeFacebookController)
);

router.post(
  "/change_github",
  controllersWrapper(controllers.changeGithubController)
);

router.post(
  "/change_linkedin",
  controllersWrapper(controllers.changeLinkedinController)
);

router.post(
  "/change_location",
  controllersWrapper(controllers.changeLocationController)
);

router.post(
  "/change_phone",
  controllersWrapper(controllers.changePhoneController)
);

router.post(
  "/change_telegram",
  controllersWrapper(controllers.changeTelegramController)
);

router.post(
  "/change_twitter",
  controllersWrapper(controllers.changeTwitterController)
);

router.post(
  "/change_website",
  controllersWrapper(controllers.changeWebsiteController)
);

module.exports = router;
