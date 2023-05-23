import { Post } from './types/Post';
import { RootState } from '../../store';

export const selectPosts = (state: RootState): Post[] => state.posts.posts;
