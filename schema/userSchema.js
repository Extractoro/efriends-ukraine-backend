const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set your name"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    location: {
      type: String,
      default: "No information",
    },
    phone: {
      type: String,
      default: "No information",
    },
    bio: {
      type: String,
      default: "No information",
    },
    about: {
      type: String,
      default: "No information",
    },
    website: {
      type: String,
      default: "No information",
    },
    github: {
      type: String,
      default: "No information",
    },
    twitter: {
      type: String,
      default: "No information",
    },
    linkedin: {
      type: String,
      default: "No information",
    },
    facebook: {
      type: String,
      default: "No information",
    },
    telegram: {
      type: String,
      default: "No information",
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    tokenIsActive: {
      type: Boolean,
      default: true,
    },
    avatarURL: String,
    token: String,
  },
  { collection: "user" }
);

userSchema.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

const User = model("user", userSchema);

module.exports = { User };
