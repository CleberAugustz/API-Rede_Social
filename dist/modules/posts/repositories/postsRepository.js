"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var Posts_1 = __importDefault(require("../models/Posts"));
var PostRepository = /** @class */ (function () {
    function PostRepository() {
        this.posts = [];
    }
    PostRepository.prototype.all = function () {
        return this.posts;
    };
    PostRepository.prototype.find = function (id) {
        var findPost = this.posts.find(function (post) { return id === post.id; });
        return findPost || null;
    };
    PostRepository.prototype.create = function (_a) {
        var title = _a.title, user = _a.user, message = _a.message;
        var qtd = this.posts.length;
        var post = new Posts_1.default({
            id: "" + (qtd + 1),
            title: title,
            user: user,
            date: date_fns_1.getDate(Date.now()) + "/" + (date_fns_1.getMonth(Date.now()) + 1) + "/" + date_fns_1.getYear(Date.now()),
            message: message,
        });
        this.posts.push(post);
        return post;
    };
    return PostRepository;
}());
exports.default = PostRepository;
