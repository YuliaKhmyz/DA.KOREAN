import { type } from 'os';

export type Comment = {
  id: number;
  user_id: number;
  post_id: number;
  comment: string;
};

export type CommentId = Comment['id'];
