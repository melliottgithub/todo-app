export class Todo {
    constructor(
      public readonly id: string,
      public title: string,
      public description: string,
      public completed: boolean,
      public readonly createdAt: Date,
      public updatedAt: Date
    ) {}
  }
  