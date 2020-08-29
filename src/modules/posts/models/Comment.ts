export default class Comment {
  id: string;

  post_id: string;

  comment: string;

  user: string;

  date: string;

  constructor({ id, user, post_id, date, comment }: Comment) {
    this.id = id;
    this.post_id = post_id;
    this.user = user;
    this.date = date;
    this.comment = comment;
  }
}
