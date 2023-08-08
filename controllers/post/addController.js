// const addPostSchema = require("../../schema/addJoiSchema");

const { addPost } = require("../../services/postService");

const add = async (req, res) => {
  //   const { error } = addPostSchema.validate(req.body);

  //   if (error) {
  //     return res.status(400).json({ status: 400, message: "Missing fields" });
  //   }
  const id = req.user._id;
  const text = Object.assign({}, req.body).text;
  const files = req.files;

  await addPost(text, files, id);

  res.status(200).json({ status: 200, message: "Created" });
};

module.exports = add;
