import { Todo } from '../models/Todo';

export interface ITodoService {
  create(title: string, description: string): Promise<Todo>;
  getById(id: string): Promise<Todo>;
  update(todo: Todo): Promise<Todo>;
  delete(id: string): Promise<void>;
  list(): Promise<Todo[]>;
}
