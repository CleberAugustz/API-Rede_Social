"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var Comment_1 = __importDefault(require("../models/Comment"));
var CommentsRepository = /** @class */ (function () {
    function CommentsRepository() {
        this.comments = [];
    }
    CommentsRepository.prototype.findComments = function (post_id) {
        var findPost = this.comments.filter(function (comments) { return post_id === comments.post_id; });
        return findPost || null;
    };
    CommentsRepository.prototype.create = function (_a) {
        var user = _a.user, post_id = _a.post_id, comment = _a.comment;
        var qtd = this.comments;
        var comments = new Comment_1.default({
            id: "" + (qtd.length + 1),
            date: date_fns_1.getDate(Date.now()) + "/" + (date_fns_1.getMonth(Date.now()) + 1) + "/" + date_fns_1.getYear(Date.now()),
            user: user,
            post_id: post_id,
            comment: comment,
        });
        this.comments.push(comments);
        return comments;
    };
    return CommentsRepository;
}());
exports.default = CommentsRepository;
