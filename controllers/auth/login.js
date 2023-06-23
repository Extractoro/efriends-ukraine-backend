const { login } = require("../../services/authService");
const { loginJoiSchema, User } = require("../../schema");

const loginController = async (req, res) => {
  const { error } = loginJoiSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ status: 400, message: "Missing fields" });
  }

  const { email, password } = req.body;
  const token = await login(email, password);

  const user = await User.findOne({ email });

  res
    .status(200)
    .json({ status: 200, token, user: { name: user.name, email: user.email } });
};

module.exports = loginController;
