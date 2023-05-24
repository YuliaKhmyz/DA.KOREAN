import { Post } from './types/Post';
import { Comment } from './types/Comment';

export async function getPosts(): Promise<Post[]> {
  const result = await fetch('/api/posts');
  return result.json();
}

// export async function getComments(): Promise<Comment[]> {
//   const result = await fetch('/api/comments');
//   return result.json();
// }

// export async function createComment(comment: string): Promise<C> {
//   const res = await fetch('/api/calligraphies', {
//     method: 'POST',
//     body: JSON.stringify({ title, link, koreantitle }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (res.status >= 400) {
//     const { error } = await res.json();
//     throw error;
//   }

//   return res.json();
// }
