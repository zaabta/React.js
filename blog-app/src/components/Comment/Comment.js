import React from "react";
import "./Comment.css";
import parse from "html-react-parser";

const Comment = ({ name, avater, text }) => {
  return (
    <div className="comment">
      <div className="container">
        <div className="avater-username">
          <img
            className="avater"
            src={
              avater
                ? avater["24"]
                : process.env.PUBLIC_URL + "assert/blank-profile.png"
            }
          />
          <label>{name}</label>
        </div>
        <div id="text">{parse(text)}</div>
      </div>
    </div>
  );
};

export default Comment;
