import { Todo } from '../models/Todo';
import { v4 as uuidv4 } from 'uuid';

export class TodoFactory {
  static create(title: string, description: string): Todo {
    if (!title) {
      throw new Error('Title is required');
    }

    const id = uuidv4();
    const createdAt = new Date();
    const updatedAt = new Date();
    const completed = false;

    return new Todo(id, title, description, completed, createdAt, updatedAt);
  }
}
