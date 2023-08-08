const { editPost } = require("../../services/postService");

const editPostController = async (req, res) => {
  const { id } = req.params;
  const text = Object.assign({}, req.body).text;

  await editPost(id, text);

  res.status(200).json({ status: 200, message: "Post edited!" });
};

module.exports = editPostController;
