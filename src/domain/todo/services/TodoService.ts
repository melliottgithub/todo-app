import { ITodoService } from "./ITodoService";
import { Todo } from "../models/Todo";
import { ITodoRepository } from "../repositories/ITodoRepository";
import { TodoFactory } from "../factories/TodoFactory";

export class TodoService implements ITodoService {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async create(title: string, description: string): Promise<Todo> {
    const todo = TodoFactory.create(title, description);
    return await this.todoRepository.create(todo);
  }

  async getById(id: string): Promise<Todo> {
    const todo = await this.todoRepository.getById(id);
    return todo;
  }

  async update(todo: Todo): Promise<Todo> {
    const todoUpdated = await this.todoRepository.update(todo);
    return todoUpdated;
  }

  async delete(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }

  async list(): Promise<Todo[]> {
    const todos = await this.todoRepository.list();
    return todos;
  }
}
