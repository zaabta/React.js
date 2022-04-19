import React, { useState, useEffect } from "react";
import "./Blog.css";
import Comments from "../Comments/Comments";
import PostsList from "../PostsList/PostsList";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";

const Blog = () => {
  const { slug } = useParams();
  const [data, isPending, err] = useFetch(
    `https://www.wp-course.site/wp-json/youthink/post?slug=${slug}`
  );
  return (
    <div className="blog">
      <h1>{(data && data.data.title) ? data.data.title : "Our Lastes posts"}</h1>
      <div className="container">
        <div className="posts">
          <PostsList slug={{data, isPending, err}} />
        </div>
        <div className="comments">
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Blog;
