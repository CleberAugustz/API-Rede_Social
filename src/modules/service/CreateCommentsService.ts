import Comments from '../posts/models/Comment';
import CommentsRepository from '../posts/repositories/commentsRepository';

interface RequestDTO {
  user: string;
  post_id: string;
  comment: string;
}

class CreateCommentsService {
  private commentsRepository: CommentsRepository;

  constructor(commentsRepository: CommentsRepository) {
    this.commentsRepository = commentsRepository;
  }

  public execute({ post_id, user, comment }: RequestDTO): Comments {
    const post = this.commentsRepository.create({
      post_id,
      comment,
      user,
    });

    return post;
  }
}

export default CreateCommentsService;
