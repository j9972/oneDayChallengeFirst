import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);

  return (
    <div>
      {postList.map((val, key) => {
        return (
          <div key={key} className="post">
            <div className="title">{val.title}</div>
            <div
              className="body"
              onClick={() => {
                navigate(`/post/${val.id}`);
              }}
            >
              {val.description}
            </div>
            <div className="footer">{val.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
