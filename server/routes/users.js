import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "";

import {verfyToken} from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verfyToken, getUser);
router.get("/:id/friends", verfyToken, getUserFriends);

/* UPDATE */    
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;