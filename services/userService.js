const { User } = require("../schema");

const changeOption = async (userId, body) => {
  const result = await User.findByIdAndUpdate(userId, body, {
    new: true,
  });

  return result;
};

module.exports = { changeOption };
