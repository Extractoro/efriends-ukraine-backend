const { nameSchema } = require("../../schema/user/nameSchema");
const jwt = require("jsonwebtoken");
const { changeOption } = require("../../services/userService");
const { JWT_SECRET } = process.env;

const changeNameController = async (req, res, next) => {
  const { error } = nameSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ status: 400, message: "Missing fields" });
  }

  const { authorization = "" } = req.headers;
  const [_, token] = authorization.split(" ");
  const { _id } = jwt.verify(token, JWT_SECRET);

  const result = await changeOption(_id, req.body, "name");

  if (!result) throw new Error({ status: 404 });
  res
    .status(200)
    .json({ status: 200, message: "Updated success!", data: result });
};

module.exports = changeNameController;
