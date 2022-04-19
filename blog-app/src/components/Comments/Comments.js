import React from "react";
import "./Comments.css";
import useFetch from "../../useFetch";
import Comment from "../Comment/Comment";

const Comments = () => {
  const [data, isPending, error] = useFetch(
    "https://www.wp-course.site/wp-json/wp/v2/comments"
  );
  return (
    <div className="comments">
      <div className="container">
        <h2>Lastes Comments</h2>
        <div className="comment">
          {!isPending &&
            data.map((comment) => (
              <Comment
                key = {comment.id}
                name={comment.author_name}
                avater={comment.author_avatar_urls}
                text={comment.content.rendered}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
