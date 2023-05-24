import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import { useAppDispatch } from '../../store';
import { getPosts } from './postsSlice';
import { selectPosts } from './selectors';
import './blogPage.css';
import Section from '../../Components/Section/Section';
import { Container, Button } from 'react-bootstrap';

function BlogPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
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
        <div className="blog-post-wrapper">
          <form className="comment-form">
            <h2 className="post-title">Комментарии</h2>
            <label htmlFor="comment-input" className="form-label">
              <input
                type="text"
                id="comment-input"
                className="comment-input"
                placeholder="Оставьте свой комментарий"
              />
            </label>
          </form>
          <Button
            type="submit"
            variant="outline-secondary"
            className="send-comment-btn"
          >
            Отправить
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default BlogPage;
