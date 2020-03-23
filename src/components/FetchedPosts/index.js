import React from "react";
import Post from "../Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../redux/actionsCreator";
import { Loader } from "../Loader";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <button className="btn btn-primary" onClick={() => dispatch(fetchPost())}>
        Загрузить
      </button>
    );
  }

  return (
    <div>
      {posts.map(post => (
        <Post title={post.title} key={post.id} />
      ))}
    </div>
  );
};
