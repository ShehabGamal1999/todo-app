import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css'],
})
export class TodoWrapperComponent {
  todos = [
    { id: 1, title: 'portflio-task', completed: false },
    { id: 2, title: 'users-task', completed: true },
    { id: 3, title: 'todo-task', completed: false },
  ];

  addTodo(task: string) {
    this.todos.push({
      id: this.todos.length + 1,
      title: task,
      completed: false,
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleCompletion(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
