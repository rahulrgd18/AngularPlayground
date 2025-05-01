import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFolderComponent } from './todo-folder.component';

describe('TodoFolderComponent', () => {
  let component: TodoFolderComponent;
  let fixture: ComponentFixture<TodoFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoFolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
