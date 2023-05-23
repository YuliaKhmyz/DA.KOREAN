import React from 'react';
import { Post, PostId } from './types/Post';
import pic1 from './pic1.jpg';

function PostItem({ post }: { post: Post }): JSX.Element {
  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.description}</p>
      <img src={post.photo} alt="pic" />
      <img src={pic1} alt="1" />
      <img src="/images/pic1.jpg" alt="" />
    </div>
  );
}

export default PostItem;
