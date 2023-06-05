import asyncHandler from "../services/asyncHandler.js";
import User from "../models/userSchema.js";
import CustomError from "../utils/customError.js";
import Post from "../models/postSchema.js";

export const listPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).populate("user", "username  ");

  if (!posts) {
    throw new CustomError("No Posts Found", 404);
  }
  res.status(200).json(posts);
});

export const createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const currentUser = req.user;

  if (!title || !content) {
    throw new CustomError("All Fields are required", 400);
  }

  if (!currentUser) {
    throw new CustomError("Unauthenticated User", 403);
  }

  const newPost = await Post.create({
    title: title,
    content: content,
    user: currentUser,
  });

  if (newPost) {
    res.status(201).json({
      _id: newPost._id,
      title: newPost.title,
      content: newPost.content,
      createdAt: newPost.updatedAt,
      updatedAt: newPost.updatedAt,

      user: {
        _id: newPost.user._id,
        username: newPost.user.username,
      },
    });
  }
});

export const getPostById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id).populate("user", " username email");

  if (!post) {
    throw new CustomError("No Post Found", 404);
  }

  res.status(200).json({
    _id: post._id,
    title: post.title,
    content: post.content,
    createdAt: post.updatedAt,
    updatedAt: post.updatedAt,
    user: {
      username: post.user.username,
      _id: post.user._id,
    },
  });
});

export const deletePostById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const currentUser = req.user;

  const post = await Post.findById(id);

  if (!post) {
    throw new CustomError("post not found", 404);
  }

  // Check if the current user is the author of the post
  if (post.user.toString() !== currentUser._id.toString()) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  await post.deleteOne();

  res.status(200).json({ message: "Post deleted successfully" });
});

export const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const currentUser = req.user;
  const { title, content } = req.body;

  const post = await Post.findById(id);

  if (!post) {
    throw new CustomError("Post not found", 404);
  }

  // Check if the current user is the author of the post
  if (post.user.toString() !== currentUser._id.toString()) {
    throw new CustomError("Unauthorized", 403);
  }

  post.title = title || post.title;
  post.content = content || post.content;

  await post.save();

  res.status(200).json({ message: "Post updated successfully", post });
});
