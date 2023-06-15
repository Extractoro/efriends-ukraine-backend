const { confirmationResend } = require("../../services/authService");

const resentVerification = async (req, res) => {
  const { email } = req.body;
  await confirmationResend(email);

  res.status(200).json({
    status: 200,
    message: "We resend you a letter with verification!",
  });
};

module.exports = resentVerification;
