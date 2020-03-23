import React from "react";
import Post from "../Post";
import { connect } from "react-redux";

const Posts = ({ posts }) => {
  if (!posts.length) {
    return <div>Постов пока нет!</div>;
  }
  return posts.map(post => <Post key={post.id} title={post.title} />);
};

export default connect(
  ({ posts }) => ({
    posts: posts.posts
  }),
  null
)(Posts);
