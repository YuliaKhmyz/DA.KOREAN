import React from 'react';
import { Post, PostId } from './types/Post';
// import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';

function PostItem({ post }: { post: Post }): JSX.Element {
  return (
    <div className="post-container">
      <h4 className="post-title">{post.title}</h4>
      <div className="post-content-container">
        <p className="post-text">{post.description}</p>
        {/* <img src={post.photo} alt="pic" /> */}
        <div className="blog-page-image-container">
          {/* <img src={pic1} alt="1" /> */}
          <img src={pic2} alt="2" />
        </div>
      </div>
      {/* <img src="/images/pic1.jpg" alt="" /> */}
    </div>
  );
}

export default PostItem;
