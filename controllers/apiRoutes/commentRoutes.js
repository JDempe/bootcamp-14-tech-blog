const express = require("express");
const router = express.Router();
const { Comment } = require("../../models");

// GET route to retrieve all comments for a specific post by post ID
router.get("/:postid", async (req, res) => {
  try {
   // Find all comments where the post_id is equal to the post id in the request parameters
      const comments = await Comment.findAll({
      where: { post_id: req.params.postid },
      });

    if (comments) {
      res.status(200).json(comments);
    } else {
      res.status(200).json("No comments found" );
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
