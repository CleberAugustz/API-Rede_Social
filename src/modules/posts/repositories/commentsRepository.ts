import { getDate, getMonth, getYear } from 'date-fns';
import Comments from '../models/Comment';
import IComments from '../dtos/IComments';

class CommentsRepository {
  private comments: Comments[];

  constructor() {
    this.comments = [];
  }

  public findComments(post_id: string): Comments[] | null {
    const findPost = this.comments.filter(
      comments => post_id === comments.post_id,
    );

    return findPost || null;
  }

  public create({ user, post_id, comment }: IComments): Comments {
    const qtd = this.comments;
    const comments = new Comments({
      id: `${qtd.length + 1}`,
      date: `${getDate(Date.now())}/${getMonth(Date.now()) + 1}/${getYear(
        Date.now(),
      )}`,
      user,
      post_id,
      comment,
    });
    this.comments.push(comments);

    return comments;
  }
}

export default CommentsRepository;
