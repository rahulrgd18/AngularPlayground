import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { TodoFolder } from '../model/todo-folder.model';
import { TodoList } from '../model/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoFolderDbService extends Dexie {
  public todoFolders!: Table<TodoFolder, number>;

  constructor() {
    super('TodoAppDB');

    this.version(1).stores({
      todoFolders: '++id, name, createdAt, updatedAt'
    });

    this.todoFolders.mapToClass(TodoFolder);
  }

  /** Add a new folder */
  async addFolder(folder: TodoFolder): Promise<number> {
    folder.updatedAt = new Date();
    folder.createdAt = new Date();
    return await this.todoFolders.add(folder);
  }

  /** Get all folders */
  async getAllFolders(): Promise<TodoFolder[]> {
    return await this.todoFolders.toArray();
  }

  /** Get a folder by ID */
  async getFolderById(id: number): Promise<TodoFolder | undefined> {
    return await this.todoFolders.get(id);
  }

  /** Update folder */
  async updateFolder(folder: TodoFolder): Promise<number> {
    folder.updatedAt = new Date();
    return await this.todoFolders.update(folder.id!, {
      name: folder.name,
      todoLists: folder.todoLists,
      updatedAt: folder.updatedAt
    });
  }

  /** Delete folder by ID */
  async deleteFolder(id: number): Promise<void> {
    await this.todoFolders.delete(id);
  }

  /** Add a TodoList to a specific folder */
  async addTodoListToFolder(folderId: number, todoList: TodoList): Promise<void> {
    const folder = await this.getFolderById(folderId);
    if (!folder) throw new Error('Folder not found');
    folder.addTodoList(todoList);
    await this.updateFolder(folder);
  }

  /** Remove a TodoList from a folder */
  async removeTodoListFromFolder(folderId: number, todoListId: number): Promise<void> {
    const folder = await this.getFolderById(folderId);
    if (!folder) throw new Error('Folder not found');
    folder.removeTodoList(todoListId);
    await this.updateFolder(folder);
  }

  /** Clear all folders (for reset or testing) */
  async clearAllFolders(): Promise<void> {
    await this.todoFolders.clear();
  }
}
