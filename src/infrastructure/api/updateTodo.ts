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
    const updateData = JSON.parse(event.body || "{}");
    const updatedTodo = await todoService.update({ id: todoId, ...updateData });

    return {
      statusCode: 200,
      body: JSON.stringify(updatedTodo),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: "An error occurred while updating the todo item.",
    };
  }
};
