// todo.model.ts
export class Todo {
  public readonly createdAt: Date;
  public updatedAt: Date;
  public completed: boolean;
  public listId!: number;  // Required but will be set later
  public id?: number;       // Optional: id is optional when creating a new todo

  // Constructor with optional listId, id, and title
  constructor(
    public title: string,
    listId?: number,  // Can be optionally passed when creating a Todo
    id?: number       // Can be optionally passed when creating a Todo
  ) {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.completed = false;
    this.listId = listId ?? -1;  // Default to -1 if listId is not provided
    this.id = id;  // Optional: id might be auto-generated later
  }

  // Method to mark the Todo as completed
  markAsCompleted(): void {
    this.completed = true;
    this.updatedAt = new Date();  // Update the timestamp when status changes
  }

  // Method to update the title
  updateTitle(newTitle: string): void {
    this.title = newTitle;
    this.updatedAt = new Date();  // Update the timestamp when title changes
  }

  // Method to reset the completion status
  resetCompletion(): void {
    this.completed = false;
    this.updatedAt = new Date();  // Update the timestamp when status resets
  }
}
