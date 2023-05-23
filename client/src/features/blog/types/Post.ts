import { type } from 'os';

export type Post = {
  id: number;
  title: string;
  description: string;
  photo: string;
};

export type PostId = Post['id'];
