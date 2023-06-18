const express = require("express");
const router = express.Router();
const { Comment } = require("../../models");

// GET route to retrieve all comments for a specific post by post ID
router.get("/:postid", async (req, res) => {
  try {
    const comments = await Comment.findByPk(req.params.postid);
    if (comments) {
      res.status(200).json(comments);
    } else {
      res.status(404).json({ error: "Comment not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST route to create a new comment and assign post to the post id
router.post("/create/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      post_id: id,
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
