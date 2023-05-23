import { Post } from './types/Post';

export async function getPosts(): Promise<Post[]> {
  const result = await fetch('/api/posts');
  return result.json();
}
