import { startOfHour, getDate, getMonth, getYear } from 'date-fns';
import Posts from '../posts/models/Posts';
import PostsRepository from '../posts/repositories/postsRepository';

interface RequestDTO {
  title: string;
  user: string;
  message: string;
}

class CreatePostService {
  private postsRepository: PostsRepository;

  constructor(postRepository: PostsRepository) {
    this.postsRepository = postRepository;
  }

  public execute({ title, user, message }: RequestDTO): Posts {
    const post = this.postsRepository.create({
      title,
      message,
      user,
    });

    return post;
  }
}

export default CreatePostService;
