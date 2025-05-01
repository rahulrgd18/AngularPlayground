import { TodoList } from './todoList.model';

export class TodoFolder {
  public id?: number;
  public name: string;
  public todoLists: TodoList[] = [];
  public createdAt: Date;
  public updatedAt: Date;

  constructor(name: string, id?: number, todoLists?: TodoList[]) {
    this.name = name.trim();
    this.id = id;
    this.todoLists = todoLists ?? [];
    const now = new Date();
    this.createdAt = now;
    this.updatedAt = now;
  }

  // Method to add a todo list
  addTodoList(todoList: TodoList): void {
    this.todoLists.push(todoList);
    this.updateTimestamp();
  }

  // Method to remove a todo list by ID
  removeTodoList(todoListId: number): void {
    this.todoLists = this.todoLists.filter(list => list.id !== todoListId);
    this.updateTimestamp();
  }

  // Update the updatedAt timestamp
  updateTimestamp(): void {
    this.updatedAt = new Date();
  }

  // Optional: Convert instance to plain object (for Dexie or API)
  toPlainObject(): object {
    return {
      id: this.id,
      name: this.name,
      todoLists: this.todoLists, // May need `.map(t => t.toPlainObject())` if nested persistence
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }
}
