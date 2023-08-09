import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verify, verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ  */
router.get("/", verifyToken, getFeedPosts); //get all tasks
router.get("/:userId/posts", verifyToken, getUserPosts); //get task of one friend


/* UPDATE */
router.patch("/:id/like", verifyToken, likePost); //can be used to give good review


export default router;