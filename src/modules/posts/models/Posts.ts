import { uuid } from 'uuidv4';
import { getDate, getMonth, getYear } from 'date-fns';

export default class Post {
  id: string;

  title: string;

  message: string;

  user: string;

  date: string;

  constructor({ id, title, user, date, message }: Post) {
    this.id = id;
    this.title = title;
    this.user = user;
    this.date = date;
    this.message = message;
  }
}
