const { registration } = require("../../services/authService");
const { authJoiSchema } = require("../../schema");

const registrationController = async (req, res) => {
  const { error } = authJoiSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ status: 400, message: "Missing fields" });
  }

  const { email, password, name } = req.body;

  try {
    await registration(email, password, name);
    return res.status(201).json({ status: 201, message: "Created" });
  } catch (error) {
    return res
      .status(409)
      .json({ status: 409, error, message: "Email in use" });
  }
};

module.exports = registrationController;
