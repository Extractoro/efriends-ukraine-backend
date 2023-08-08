const express = require("express");
const router = express.Router();
const controllers = require("../../controllers");
const controllersWrapper = require("../../helpers/controllersWrapper");
const { authMiddleware, upload } = require("../../middlewares");

router.use(authMiddleware);

router.get("/getAll", controllersWrapper(controllers.getAllPostsController));

router.post(
  "/add",
  upload.array("files", 12),
  controllersWrapper(controllers.addPostController)
);

router.patch("/edit/:id", controllersWrapper(controllers.editPostController));

router.patch(
  "/add_photo/:id",
  upload.array("files", 10),
  controllersWrapper(controllers.editAddPhotoPostController)
);

router.patch(
  "/delete_photo/:id/:name",
  controllersWrapper(controllers.editDeletePhotoPostController)
);

router.delete(
  "/delete/:id",
  controllersWrapper(controllers.deletePostController)
);

router.patch(
  "/favorite/:id",
  controllersWrapper(controllers.updateFavoriteController)
);

module.exports = router;
