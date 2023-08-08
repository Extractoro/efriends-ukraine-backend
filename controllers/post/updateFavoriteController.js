const { updateFavorite } = require("../../services/postService");

const updateFavoriteController = async (req, res) => {
  const { id } = req.params;

  await updateFavorite(id);

  res
    .status(200)
    .json({ status: 200, message: "Post favorite status changed!" });
};

module.exports = updateFavoriteController;
