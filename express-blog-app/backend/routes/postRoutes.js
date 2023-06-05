import { Router } from "express";
import {
  listPosts,
  createPost,
  getPostById,
  deletePostById,
  updatePost,
} from "../controller/postController.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";
const router = Router();

router.get("", listPosts).post("", isLoggedIn, createPost);
router
  .get("/:id", getPostById)
  .delete("/:id", isLoggedIn, deletePostById)
  .put("/:id", isLoggedIn, updatePost);

export default router;
