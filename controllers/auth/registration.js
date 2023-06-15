const { registration } = require("../../services/authService");
const { authJoiSchema } = require("../../schema");

const registrationController = async (req, res) => {
  console.log(req.body);
  const { error } = authJoiSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ status: 400, message: "Missing fields" });
  }

  const { email, password, name } = req.body;
  await registration(email, password, name);

  res.status(201).json({ status: 201, message: "Created" });
};

module.exports = registrationController;
