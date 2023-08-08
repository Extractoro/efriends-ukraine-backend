const { editDeletePhoto } = require("../../services/postService");

const editAddPhotoPostController = async (req, res) => {
  const { id, name } = req.params;

  try {
    await editDeletePhoto(id.toString().trim(), name);
    return res.status(200).json({ status: 200, message: "Photo deleted!" });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error,
      message: "Не видалено",
    });
  }
};

module.exports = editAddPhotoPostController;
