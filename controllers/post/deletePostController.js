const { deletePost } = require("../../services/postService");

const deletePostController = async (req, res) => {
  const { id } = req.params;

  await deletePost(id.toString().trim());

  res.status(200).json({ status: 200, message: "Post deleted!" });
};

module.exports = deletePostController;
