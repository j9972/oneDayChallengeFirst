const express = require("express");
const app = express();
const PORT = 3001;

const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentRouter = require("./routes/Comments");
app.use("/comments", commentRouter);
const userRouter = require("./routes/Users");
app.use("/users", userRouter);

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
