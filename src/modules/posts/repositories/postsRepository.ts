import { isEqual, getDate, getMonth, getYear } from 'date-fns';
import Posts from '../models/Posts';
import IPostDTO from '../dtos/IPostDTO';

class PostRepository {
  private posts: Posts[];

  constructor() {
    this.posts = [];
  }

  public all(): Posts[] {
    return this.posts;
  }

  public find(id: string): Posts | null {
    const findPost = this.posts.find(post => id === post.id);

    return findPost || null;
  }

  public create({ title, user, message }: IPostDTO): Posts {
    const qtd = this.posts.length;
    const post = new Posts({
      id: `${qtd + 1}`,
      title,
      user,
      date: `${getDate(Date.now())}/${getMonth(Date.now()) + 1}/${getYear(
        Date.now(),
      )}`,
      message,
    });
    this.posts.push(post);

    return post;
  }
}

export default PostRepository;
