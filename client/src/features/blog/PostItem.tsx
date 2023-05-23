import React from 'react';
import { Post, PostId } from './types/Post';

function PostItem({ post }: { post: Post }): JSX.Element {
  console.log('link', post.photo);

  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.description}</p>
      <img src={post.photo} alt="pic" />
      <img
        src="https://drive.google.com/file/d/13RdHkhgk4J661SnB1j9yaYPoe7kxMPL1/view"
        alt="1"
      />
    </div>
  );
}

export default PostItem;
