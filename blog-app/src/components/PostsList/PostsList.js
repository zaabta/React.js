import React, { useState, useEffect } from "react";
import "./PostsList.css";
import Post from "../Post/Post";
import { Ring } from "react-awesome-spinners";

const PostsList = ({ slug }) => {
  useEffect(() => {
    loadMore();
  }, []);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);
  const loadMore = async () => {
    setPage((preprevPageNumber) => preprevPageNumber + 1);
    setIsPending(true);
    setData(null);
    try {
      const res = await fetch(
        `https://www.wp-course.site/wp-json/youthink/posts?page=${page}`
      );
      if (!res.ok) throw new Error("Could not fetch The Data from Url !");
      else {
        const json = await res.json();
        setData(json);
        setPosts((prevPosts) => {
          return [...new Set([...prevPosts, ...json.data])];
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsPending(false);
    }
  };
  //console.log(posts);
  return (
    <div className="posts-list">
      {slug.data ? (
        <Post
          title={slug.data.data.title}
          date={slug.data.data.date}
          excerpt={slug.data.data.excerpt}
          thumbnail={slug.data.data.thumbnail}
          slug={slug.data.data.slug}
          views={slug.data.data.views}
          tags={slug.data.data.tags}
          key={slug.data.data.id}
        />
      ) : (
        posts.map((post, index) =>
          posts.length !== index + 1 ? (
            <Post
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              thumbnail={post.thumbnail}
              slug={post.slug}
              views={post.views}
              tags={post.tags}
              key={index}
            />
          ) : (
            <p key={index}></p>
          )
        )
      )}
      {(slug.isPending || isPending)&& <Ring color="#05A5EA" />}
      {!slug.data && data && posts.length != data.meta.total_posts && !isPending && (
        <input
          className="btn"
          type={"button"}
          value={"Load More"}
          onClick={loadMore}
        />
      )}
    </div>
  );
};

export default PostsList;
