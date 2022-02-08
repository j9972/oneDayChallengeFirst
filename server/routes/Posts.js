const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  const postList = await Posts.findAll();
  res.json(postList);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

router.get("/eachId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  // json 형태로 보내야 postman 확인 -> 브라우져에 이제 띄워주기
  res.json(post);
});

router.delete("/:postId", async (req, res) => {
  const postId = req.params.postId;

  await Posts.destroy({
    where: {
      id: postId,
    },
  });
  res.json("delete");
});

module.exports = router;
