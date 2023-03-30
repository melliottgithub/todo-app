# Todo Project

This project is a serverless, TypeScript-based application that provides a simple REST API to manage Todos. It leverages AWS services, such as Lambda and DynamoDB, to create a scalable and cost-effective architecture.

## Table of Contents

- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Deployment](#deployment)

## Project Structure

The project is organized into the following folders:

<pre>
todo-project/
│
├── cdk/ (AWS CDK related files)
│
└── src/
    ├── domain/ (Domain layer)
    │   ├── todo/
    │   │   ├── factories/ (Factory classes)
    │   │   │   └── TodoFactory.ts
    │   │   ├── models/ (Data models)
    │   │   │   └── Todo.ts
    │   │   ├── repositories/ (Repository interfaces)
    │   │   │   └── ITodoRepository.ts
    │   │   └── services/ (Service interfaces)
    │   │       ├── ITodoService.ts
    │   │       └── TodoService.ts
    │   └── ... (other domain models)
    │
    ├── infrastructure/ (Infrastructure layer)
    │   ├── api/ (API Gateway and Lambda handlers)
    │   │   ├── createTodo.ts
    │   │   ├── getTodo.ts
    │   │   ├── updateTodo.ts
    │   │   ├── deleteTodo.ts
    │   │   └── listTodos.ts
    │   ├── database/ (Database related files)
    │   │   └── dynamodb/
    │   │       ├── DynamoDBClient.ts
    │   │       └── TodoDynamoDBRepository.ts
    │   └── ... (other infrastructure concerns)
    │
    └── tests/ (Unit and integration tests)
</pre>

## Requirements

- Node.js v14.x or higher
- Yarn package manager
- AWS CLI v2.x
- AWS CDK
- AWS account and credentials

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com//todo-project.git
   ```

2. Change the current directory to the project folder:

    ```bash
    cd todo-project
    ```

3. Install the dependencies:

    ```bash
    yarn install
    ```

4. Set up your AWS credentials:

    
    [Set up AWS Credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
    

5. Bootstrap the AWS CDK:

    ```bash
    yarn cdk bootstrap
    ```
