import { Post } from '../../blog/types/Post';
import MyCalligraphy from './Calligraphy';

export default interface MyPage {
  calligraphies: MyCalligraphy[];
  posts: Post[];
  photo: string;
}
