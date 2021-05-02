"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comment = /** @class */ (function () {
    function Comment(_a) {
        var id = _a.id, user = _a.user, post_id = _a.post_id, date = _a.date, comment = _a.comment;
        this.id = id;
        this.post_id = post_id;
        this.user = user;
        this.date = date;
        this.comment = comment;
    }
    return Comment;
}());
exports.default = Comment;
