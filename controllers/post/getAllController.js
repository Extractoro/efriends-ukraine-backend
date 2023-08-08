const { Posts } = require("../../schema");

const getAll = async (req, res) => {
  const posts = await Posts.find();

  res.status(200).json({ status: 200, response: posts });
};

module.exports = getAll;
