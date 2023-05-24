import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import PostItem from './PostItem';
import { useAppDispatch } from '../../store';
import { getPosts } from './postsSlice';
import { selectPosts } from './selectors';
import './blogPage.css';
import Section from '../../Components/Section/Section';

function BlogPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Section>
      <Container className="blog-page">
        <div className="blog-page-title">
          <h2>Авторский блог</h2>
          <h3>Записки о Корее от магистра антропологии</h3>
        </div>
        <div className="blog-post-wrapper">
          {posts.map((post) => (
            <div key={post.id}>
              <PostItem post={post} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default BlogPage;
