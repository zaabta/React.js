import React, { useState, useEffect } from "react";
import "./Post.css";
import { GrView } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { BsTags } from "react-icons/bs";
import { Link } from "react-router-dom";

const Post = ({ title, date, excerpt, thumbnail, slug, views, tags }) => {
  const [windowSize, setWindowsSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const getWindowsSize = (window) => {
    setWindowsSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      getWindowsSize(window);
    });
    return () => window.removeEventListener("resize", getWindowsSize);
  },[typeof window !== "undefined"]);

  return (
    <div className="post">
      <Link to={`/blog/${slug}`}>
        <img src={thumbnail} />
      </Link>
      <div className="post-info">
        <h3>{title}</h3>
        <p>
          {windowSize.width < 960
            ? excerpt.substring(0, excerpt.length / 2) + "..."
            : excerpt}
        </p>
        <div className="post-info-views-data-tags">
          <div className="views">
            <GrView className="icon" />
            <label>{views}</label>
          </div>
          /
          <div className="date">
            <MdOutlineDateRange className="icon" />
            <label>{date}</label>
          </div>
          /
          <div className="tags">
            <BsTags className="icon" />
            {tags &&
              tags.map((tag, index) => (
                <label key={index}>
                  {`${index == tags.length - 1 ? tag : tag + ","}`}
                </label>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
