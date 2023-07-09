const { phoneSchema } = require("../../schema/user/phoneSchema");
const jwt = require("jsonwebtoken");
const { changeOption } = require("../../services/userService");
const { JWT_SECRET } = process.env;

const changePhoneController = async (req, res, next) => {
  const { error } = phoneSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ status: 400, message: "Missing fields" });
  }

  const { authorization = "" } = req.headers;
  const [_, token] = authorization.split(" ");
  const { _id } = jwt.verify(token, JWT_SECRET);

  console.log(_id);

  const result = await changeOption(_id, req.body);

  if (!result) throw new Error({ status: 404 });
  res
    .status(200)
    .json({ status: 200, message: "Updated success!", data: result });
};

module.exports = changePhoneController;
