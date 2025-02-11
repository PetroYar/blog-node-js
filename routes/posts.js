import { Router } from "express";
import {
  createPost,
  getAll,
  getById,
  getMyPosts,
  removePost,
  updatePost,
  getPostComments,
} from "../controlers/posts.js";
import { checkAuth } from "../utils/checkAuth.js";
const router = new Router();

router.post("/", checkAuth, createPost);

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", checkAuth, updatePost);

router.get("/user/me", checkAuth, getMyPosts);


router.delete("/:id", checkAuth, removePost);



export default router;
