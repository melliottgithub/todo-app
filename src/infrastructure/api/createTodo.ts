import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { TodoService } from "../../domain/todo/services/TodoService";
import { TodoDynamoDBRepository } from "../database/dynamodb/TodoDynamoDBRepository";

const todoRepository = new TodoDynamoDBRepository();
const todoService = new TodoService(todoRepository);

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const todoData = JSON.parse(event.body || "{}");
    const createdTodo = await todoService.create(
      todoData.title,
      todoData.description
    );

    return {
      statusCode: 201,
      body: JSON.stringify(createdTodo),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: "An error occurred while creating the todo item.",
    };
  }
};
