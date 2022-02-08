const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

// 각 post에 대해서 댓글을 보야줘야함

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({
    where: {
      PostId: postId,
    },
  });
  res.json(comments);
});

router.post("/", async (req, res) => {
  const comment = req.body;
  await Comments.create(comment);
  res.json(comment);
});

router.delete("/:commentId", async (req, res) => {
  const commentId = req.params.commentId;

  await Comments.destroy({
    where: {
      id: commentId,
    },
  });
  res.json("delete");
});

module.exports = router;
