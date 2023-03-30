import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { TodoService } from '../../domain/todo/services/TodoService';
import { TodoDynamoDBRepository } from '../database/dynamodb/TodoDynamoDBRepository';

const todoRepository = new TodoDynamoDBRepository();
const todoService = new TodoService(todoRepository);

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const todos = await todoService.list();

    return {
      statusCode: 200,
      body: JSON.stringify(todos),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'An error occurred while listing the todo items.',
    };
  }
};
