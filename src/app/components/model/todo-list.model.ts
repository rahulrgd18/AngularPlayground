import { Todo } from './todo.model';

export class TodoList {
  public id?: number;
  public name: string;
  public todoList: Todo[] = [];
  public createdAt: Date;
  public updatedAt: Date;

  constructor(name: string, id?: number) {
    this.name = name;
    this.id = id;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  // Add a new todo
  addTodo(todo: Todo): void {
    this.todoList.push(todo);
    this.touch();
  }

  // Remove a todo by ID
  removeTodo(id: number): void {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
    this.touch();
  }

  // Mark a todo as complete/incomplete
  toggleTodoCompletion(id: number): void {
    const todo = this.todoList.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.touch();
    }
  }

  // Update last modified timestamp
  private touch(): void {
    this.updatedAt = new Date();
  }
}
