const { User, Posts } = require("../schema");
// const ObjectId = require("mongoose").Types.ObjectId;

const changeOption = async (userId, body, type = null) => {
  const result = await User.findByIdAndUpdate(userId, body, {
    new: true,
  });

  if (type === "about") {
    await Posts.updateMany(
      { authorId: userId },
      {
        authorAbout: body.about,
      },
      {
        new: true,
      }
    );
  } else if (type === "name") {
    await Posts.updateMany(
      { authorId: userId },
      {
        authorName: body.name,
      },
      {
        new: true,
      }
    );
  }

  return result;
};

module.exports = { changeOption };
