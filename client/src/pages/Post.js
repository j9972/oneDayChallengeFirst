import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// 각각의 post들을 보여줌
function Post() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [postOb, setPostOb] = useState([]);
  const [commentOb, setCommentOb] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/eachId/${id}`).then((response) => {
      setPostOb(response.data);
    });
    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setCommentOb(response.data);
    });
  }, []);

  const addComment = () => {
    axios
      .post("http://localhost:3001/comments", {
        commentText: newComment,
        PostId: id,
      })
      .then((response) => {
        const commentToAdd = { commentText: newComment };
        setCommentOb([...commentOb, commentToAdd]);
        setNewComment("");
      });
  };

  const deleteComment = (id) => {
    axios.delete(`http://localhost:3001/comments/${id}`).then(() => {
      setCommentOb(
        commentOb.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  const deletePost = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      navigate("/");
    });
  };

  // post 1개만 보여주는 페이지 이므로 map 함수는 불필요
  return (
    <>
      <div>
        <div> {postOb.title} </div>
        <div>{postOb.description}</div>
        <div>
          {postOb.username}{" "}
          <button
            onClick={() => {
              deletePost(postOb.id);
            }}
          >
            X
          </button>
        </div>
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="comment"
            autoComplete="off"
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          />
          <button onClick={addComment}>add comment</button>
        </div>
        <div className="comment">
          {commentOb.map((comment, key) => {
            return (
              <div key={key}>
                {comment.commentText}
                <button
                  onClick={() => {
                    deleteComment(comment.id);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Post;
