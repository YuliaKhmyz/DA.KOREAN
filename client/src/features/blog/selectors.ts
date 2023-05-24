import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { RootState } from '../../store';

export const selectPosts = (state: RootState): Post[] => state.posts.posts;

// export const selectComments = (state: RootState): Comment[] =>
//   state.comments.comments;
