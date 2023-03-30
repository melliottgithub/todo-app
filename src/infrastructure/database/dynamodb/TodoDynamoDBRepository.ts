import { ITodoRepository } from "../../../domain/todo/repositories/ITodoRepository";
import { Todo } from "../../../domain/todo/models/Todo";
import dynamoDB from "./DynamoDBClient";

export class TodoDynamoDBRepository implements ITodoRepository {
  private tableName = "Todos";

  async create(todo: Todo): Promise<Todo> {
    const params = {
      TableName: this.tableName,
      Item: todo,
    };

    await dynamoDB.put(params).promise();

    return todo;
  }

  async getById(id: string): Promise<Todo> {
    const params = {
      TableName: this.tableName,
      Key: {
        id,
      },
    };

    const result = await dynamoDB.get(params).promise();

    if (!result.Item) {
      throw new Error("Todo not found");
    }

    return result.Item as Todo;
  }

  async update(todo: Todo): Promise<Todo> {
    const params = {
      TableName: this.tableName,
      Key: {
        id: todo.id,
      },
      UpdateExpression:
        "set title = :title, description = :description, completed = :completed, updatedAt = :updatedAt",
      ExpressionAttributeValues: {
        ":title": todo.title,
        ":description": todo.description,
        ":completed": todo.completed,
        ":updatedAt": todo.updatedAt.toISOString(),
      },
      ReturnValues: "ALL_NEW",
    };

    const result = await dynamoDB.update(params).promise();

    return result.Attributes as Todo;
  }

  async delete(id: string): Promise<void> {
    const params = {
      TableName: this.tableName,
      Key: {
        id,
      },
    };

    await dynamoDB.delete(params).promise();
  }

  async list(): Promise<Todo[]> {
    const params = {
      TableName: this.tableName,
    };

    const result = await dynamoDB.scan(params).promise();

    return result.Items as Todo[];
  }
}
