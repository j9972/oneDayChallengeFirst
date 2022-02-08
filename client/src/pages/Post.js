/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// 각각의 post들을 보여줌
function Post() {
  let { id } = useParams();
  const [postOb, setPostOb] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/eachId/${id}`).then((response) => {
      setPostOb(response.data);
    });
  }, []);

  // post 1개만 보여주는 페이지 이므로 map 함수는 불필요
  return (
    <div>
      <div className="title"> {postOb.title} </div>
      <div className="body">{postOb.description}</div>
      <div className="footer">{postOb.username}</div>
    </div>
  );
}

export default Post;
