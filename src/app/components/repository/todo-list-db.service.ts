import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { TodoList } from '../model/todo-list.model';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListDBService extends Dexie {
  todoLists!: Table<TodoList, number>;
  todos!: Table<Todo, number>;

  constructor() {
    super('TodoListDatabase');

    this.version(1).stores({
      todoLists: '++id, name, createdAt, updatedAt',
      todos: '++id, title, completed, listId'
    });

    this.todoLists = this.table('todoLists');
    this.todos = this.table('todos');
  }

  // Add a new todo list
  async addTodoList(list: TodoList): Promise<number> {
    // list.createdAt = new Date();
    list.updatedAt = new Date();
    return await this.todoLists.add(list);
  }

  // Get all todo lists
  async getAllTodoLists(): Promise<TodoList[]> {
    return await this.todoLists.toArray();
  }

  // Get a specific todo list by ID
  async getTodoListById(id: number): Promise<TodoList | undefined> {
    return await this.todoLists.get(id);
  }

  // Update a todo list
  async updateTodoList(id: number, updates: Partial<TodoList>): Promise<number> {
    updates.updatedAt = new Date();
    return await this.todoLists.update(id, updates);
  }

  // Delete a todo list (and its todos)
  async deleteTodoList(id: number): Promise<void> {
    await this.todos.where('listId').equals(id).delete();
    await this.todoLists.delete(id);
  }

  // -------- Todo methods --------

  // Add todo to a list
  async addTodo(todo: Todo, listId: number): Promise<number> {
    todo.listId = listId;
    return await this.todos.add(todo);
  }

  // Get todos for a list
  async getTodosByListId(listId: number): Promise<Todo[]> {
    return await this.todos.where('listId').equals(listId).toArray();
  }

  // Toggle todo completion
  async toggleTodo(id: number): Promise<void> {
    const todo = await this.todos.get(id);
    if (todo) {
      await this.todos.update(id, { completed: !todo.completed });
    }
  }

  // Delete a single todo
  async deleteTodo(id: number): Promise<void> {
    await this.todos.delete(id);
  }
}
