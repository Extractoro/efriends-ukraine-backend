const { Posts, User } = require("../schema");
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_API_SECRET,
});

const avatarsDir = path.join(
  __dirname,
  "..",
  "..",
  "efriends-ukraine",
  "src",
  "public"
);

const addPost = async (text, files, authorId) => {
  const user = await User.findOne({ _id: authorId });
  const arr = [];

  files?.forEach((element) => {
    for (const key in element) {
      user?.files?.forEach((el) => {
        for (const key in el) {
          console.log(el);
          if (element["originalname"] === el.originalname) {
            throw new Error(
              "Вже є ця фотографія або якщо ні, то змініть його назву"
            );
          }
        }
      });
    }
    const updatePath = path.join(avatarsDir, element["originalname"]);

    fs.rename(element["path"], updatePath, (err) => {
      if (err) {
        console.log("err", err);
      }
    });
    arr.push(updatePath);
  });

  const imagIrl = [];

  for (const image of arr) {
    const res = await cloudinary.uploader.upload(image);
    imagIrl.push(res.secure_url);
  }
  const postCreation = new Posts({
    authorId,
    text,
    files: imagIrl,
    authorName: user.name,
    authorAbout: user.about,
  });

  await postCreation.save();

  user.posts.push(postCreation);

  await user.save();
};

const editPost = async (id, text) => {
  const post = await Posts.findOne({ _id: id });

  if (!post) {
    throw new Error("Invalid post!");
  }

  await Posts.findByIdAndUpdate(
    id,
    { text },
    {
      new: true,
    }
  );
};

const editAddPhoto = async (id, file) => {
  const post = await Posts.findOne({ _id: id });

  if (!post) {
    throw new Error("Invalid post!");
  }

  post.files.forEach((element) => {
    for (const key in element) {
      file.forEach((el) => {
        for (const key in el) {
          if (element["originalname"] === el.originalname) {
            throw new Error(
              "Вже є ця фотографія або якщо ні, то змініть його назву"
            );
          }
        }
      });
    }
  });

  await Posts.findByIdAndUpdate(
    id,
    { files: [...post.files, ...file] },
    {
      new: true,
    }
  );
};

const editDeletePhoto = async (id, name) => {
  const post = await Posts.findOne({ _id: id });

  if (!post) {
    throw new Error("Invalid post!");
  }

  post.files.forEach(async (element) => {
    for (const key in element) {
      if (element["originalname"] === name) {
        var arrayWithout = post.files.filter((nameorig) => {
          return nameorig.originalname !== name;
        });
      }

      await Posts.findByIdAndUpdate(
        id,
        { files: [...arrayWithout] },
        {
          new: true,
        }
      );
    }
  });
};

const deletePost = async (id) => {
  const post = await Posts.findOne({ _id: id });

  if (!post) {
    throw new Error("Invalid post!");
  }

  await Posts.findByIdAndDelete(id);
};

const updateFavorite = async (id) => {
  const post = await Posts.findOne({ _id: id });

  if (!post) {
    throw new Error("Invalid post!");
  }

  await Posts.findByIdAndUpdate(
    id,
    { favorite: !post.favorite },
    {
      new: true,
    }
  );
};

module.exports = {
  addPost,
  editPost,
  deletePost,
  editAddPhoto,
  editDeletePhoto,
  updateFavorite,
};
