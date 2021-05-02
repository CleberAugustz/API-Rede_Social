"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreatePostService = /** @class */ (function () {
    function CreatePostService(postRepository) {
        this.postsRepository = postRepository;
    }
    CreatePostService.prototype.execute = function (_a) {
        var title = _a.title, user = _a.user, message = _a.message;
        var post = this.postsRepository.create({
            title: title,
            message: message,
            user: user,
        });
        return post;
    };
    return CreatePostService;
}());
exports.default = CreatePostService;
