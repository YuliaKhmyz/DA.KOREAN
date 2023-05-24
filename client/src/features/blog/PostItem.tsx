import React, { useEffect } from 'react';
import { Post, PostId } from './types/Post';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
// import { selectComments } from './selectors';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { createComment } from './commentsSlice';
import { Button } from 'react-bootstrap';
import pic2 from './pic2.jpg';
import CommentItem from './CommentItem';

interface FormInput {
  comment: string;
}

function PostItem({ post }: { post: Post }): JSX.Element {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  const dispatch = useAppDispatch();
  // const comments = useSelector(selectComments);

  // useEffect(() => {
  //   dispatch(getComments());
  // }, [dispatch]);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
    // const dispatchResult = await dispatch(createComment(data));
    // if (createComment.fulfilled.match(dispatchResult)) {
    //   reset();
    // }
  };

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
      {/* <div className="blog-post-wrapper">
        {comments.map((comment) => (
          <div key={comment.id}>
            <CommentItem comment={comment} />
          </div>
        ))}
      </div> */}
      <div className="blog-post-wrapper">
        <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="post-title">Комментарии</h2>
          <label htmlFor="comment-input" className="form-label">
            <input
              type="text"
              id="comment-input"
              className="comment-input"
              placeholder="Оставьте свой комментарий"
              {...register('comment')}
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
      {/* <img src="/images/pic1.jpg" alt="" /> */}
    </div>
  );
}

export default PostItem;
