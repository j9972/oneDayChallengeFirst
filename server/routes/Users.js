const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { Users } = require("../models");

router.post("/", async (req, res) => {
  const { email, username, password } = req.body;

  // 이메일 검증 실패인 경우
  // if (err.name === "SequelizeValidationError") {
  //   return res.status(400).json({ warn: "check the email pattern" });
  // }

  bcrypt.hash(password, 10).then((hash) => {
    // create로 db에 접근할 데이터를 만든다
    Users.create({
      email,
      username,
      password: hash,
    });
    res.json("success");
  });
});

router.get("/login", async (req, res) => {
  const { email, username, password } = req.body;

  // 이렇게 하려면 username이 중복되면 안된다
  const user = await Users.findOne({ where: { username } });

  if (!user) {
    res.json({ error: "User doesnt exist" });
  }

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      res.json({ error: "wrong username and password combination" });
    }

    res.json({ email, username, id: user.id });
  });
});

/*
    models.User.create({
      email: req.body.email
    }).then(function (result) {
*/

router.get("/user", (req, res) => {
  res.json(req.user);
});

module.exports = router;
