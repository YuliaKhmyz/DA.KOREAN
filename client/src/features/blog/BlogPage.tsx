import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import { useAppDispatch } from '../../store';
import { getPosts } from './postsSlice';
import { selectPosts } from './selectors';

function BlogPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Авторский блог</h2>
      <h3>Записки о Корее от магистра антропологии</h3>

      {posts.map((post) => (
        <div key={post.id}>
          <PostItem post={post} />
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
