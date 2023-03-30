import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { TodoService } from "../../domain/todo/services/TodoService";
import { TodoDynamoDBRepository } from "../database/dynamodb/TodoDynamoDBRepository";

const todoRepository = new TodoDynamoDBRepository();
const todoService = new TodoService(todoRepository);

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const todoId = event.pathParameters?.id;
    if (!todoId) {
      return {
        statusCode: 400,
        body: "Bad request: missing todo id",
      };
    }
    await todoService.delete(todoId);

    return {
      statusCode: 204,
      body: "",
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: "An error occurred while deleting the todo item.",
    };
  }
};
