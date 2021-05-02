"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var postsRepository_1 = __importDefault(require("../modules/posts/repositories/postsRepository"));
var CreatePostService_1 = __importDefault(require("../modules/service/CreatePostService"));
var commentsRepository_1 = __importDefault(require("../modules/posts/repositories/commentsRepository"));
var CreateCommentsService_1 = __importDefault(require("../modules/service/CreateCommentsService"));
var postsRouter = express_1.Router();
var postsRepository = new postsRepository_1.default();
var commentsRepository = new commentsRepository_1.default();
postsRouter.get('/posts', function (request, response) {
    var posts = postsRepository.all();
    return response.json(posts);
});
postsRouter.post('/posts', function (request, response) {
    try {
        var _a = request.body, title = _a.title, user = _a.user, message = _a.message;
        var createPost = new CreatePostService_1.default(postsRepository);
        var post = createPost.execute({ title: title, user: user, message: message });
        return response.json(post);
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
postsRouter.get('/posts/:id', function (request, response) {
    var id = request.params.id;
    var post = postsRepository.find(id);
    if (!post) {
        return response.status(404).json();
    }
    return response.json(post);
});
postsRouter.get('/posts/:id/comments', function (request, response) {
    var id = request.params.id;
    var comments = commentsRepository.findComments(id);
    var post = postsRepository.find(id);
    if (!post) {
        return response.status(404).json();
    }
    if (!comments) {
        return response.status(404).json();
    }
    return response.json(comments);
});
postsRouter.post('/posts/:id/comments', function (request, response) {
    try {
        var post_id = request.params.id;
        var _a = request.body, user = _a.user, comment = _a.comment;
        var posts = postsRepository.find(post_id);
        if (!posts) {
            return response.status(404).json();
        }
        // const parsedDate = parseISO(date);
        var createComments = new CreateCommentsService_1.default(commentsRepository);
        var comments = createComments.execute({
            comment: comment,
            post_id: post_id,
            user: user,
        });
        return response.json(comments);
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
exports.default = postsRouter;
