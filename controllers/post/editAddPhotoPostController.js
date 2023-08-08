const { editAddPhoto } = require("../../services/postService");

const editAddPhotoPostController = async (req, res) => {
  const { id } = req.params;
  const files = req.files;

  try {
    await editAddPhoto(id.toString().trim(), files);
    return res.status(200).json({ status: 200, message: "Photo edited!" });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error,
      message: "Вже є ця фотографія або якщо ні, то змініть його назву",
    });
  }
};

module.exports = editAddPhotoPostController;
