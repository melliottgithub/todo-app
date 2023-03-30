import { Todo } from '../models/Todo';

export interface ITodoRepository {
  create(todo: Todo): Promise<Todo>;
  getById(id: string): Promise<Todo>;
  update(todo: Todo): Promise<Todo>;
  delete(id: string): Promise<void>;
  list(): Promise<Todo[]>;
}
