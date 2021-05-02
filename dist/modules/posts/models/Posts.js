"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(_a) {
        var id = _a.id, title = _a.title, user = _a.user, date = _a.date, message = _a.message;
        this.id = id;
        this.title = title;
        this.user = user;
        this.date = date;
        this.message = message;
    }
    return Post;
}());
exports.default = Post;
