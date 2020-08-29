import { Router } from 'express';
import PostsRepository from '../modules/posts/repositories/postsRepository';
import CreatePostService from '../modules/service/CreatePostService';
import CommentsRepository from '../modules/posts/repositories/commentsRepository';
import CreateCommentsService from '../modules/service/CreateCommentsService';

const postsRouter = Router();
const postsRepository = new PostsRepository();
const commentsRepository = new CommentsRepository();

postsRouter.get('/posts', (request, response) => {
  const posts = postsRepository.all();

  return response.json(posts);
});

postsRouter.post('/posts', (request, response) => {
  try {
    const { title, user, message } = request.body;

    const createPost = new CreatePostService(postsRepository);

    const post = createPost.execute({ title, user, message });

    return response.json(post);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

postsRouter.get('/posts/:id', (request, response) => {
  const { id } = request.params;
  const post = postsRepository.find(id);

  if (!post) {
    return response.status(404).json();
  }

  return response.json(post);
});

postsRouter.get('/posts/:id/comments', (request, response) => {
  const { id } = request.params;
  const comments = commentsRepository.findComments(id);

  const post = postsRepository.find(id);

  if (!post) {
    return response.status(404).json();
  }

  if (!comments) {
    return response.status(404).json();
  }

  return response.json(comments);
});

postsRouter.post('/posts/:id/comments', (request, response) => {
  try {
    const post_id = request.params.id;
    const { user, comment } = request.body;

    const posts = postsRepository.find(post_id);
    if (!posts) {
      return response.status(404).json();
    }

    // const parsedDate = parseISO(date);

    const createComments = new CreateCommentsService(commentsRepository);

    const comments = createComments.execute({
      comment,
      post_id,
      user,
    });

    return response.json(comments);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default postsRouter;
