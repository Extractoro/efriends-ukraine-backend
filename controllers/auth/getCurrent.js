const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { User } = require("../../schema");
const { RequestError } = require("../../helpers/RequestError");

const getCurrent = async (req, res) => {
  const { authorization = "" } = req.headers;
  const [_, token] = authorization.split(" ");
  const { _id } = jwt.verify(token, JWT_SECRET);
  const user = await User.findById(_id);

  if (!user || !user.token) {
    RequestError(401, "Unauthorized");
  }

  const {
    email,
    subscription,
    avatarURL,
    name,
    location,
    phone,
    bio,
    about,
    website,
    github,
    twitter,
    linkedin,
    facebook,
    telegram,
  } = user;

  res.status(200).json({
    status: 200,
    user: {
      email,
      subscription,
      avatarURL,
      name,
      location,
      phone,
      bio,
      about,
      website,
      github,
      twitter,
      linkedin,
      facebook,
      telegram,
    },
  });
};

module.exports = getCurrent;
