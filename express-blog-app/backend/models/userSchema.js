import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import { json } from "express";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//  hash the password before saving it.
// Encrypt password before saving - HOOKS
userSchema.pre("save", async function (next) {
  // Only run this function if password was moddified (not on other update functions)
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods = {
  comparePassword: async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  },

  getJwtToken: function () {
    return JWT.sign(
      { _id: this._id, role: this.role },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRY,
      }
    );
  },
};

export default mongoose.model("User", userSchema);
