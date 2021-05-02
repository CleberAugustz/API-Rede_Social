"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCommentsService = /** @class */ (function () {
    function CreateCommentsService(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    CreateCommentsService.prototype.execute = function (_a) {
        var post_id = _a.post_id, user = _a.user, comment = _a.comment;
        var post = this.commentsRepository.create({
            post_id: post_id,
            comment: comment,
            user: user,
        });
        return post;
    };
    return CreateCommentsService;
}());
exports.default = CreateCommentsService;
