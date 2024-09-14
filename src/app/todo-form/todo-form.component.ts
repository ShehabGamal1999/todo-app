import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  task = '';
  @Output() add = new EventEmitter<string>();

  onAdd(taskInput: HTMLInputElement) {
    const task = taskInput.value.trim();
    if (task) {
      this.add.emit(task);
      taskInput.value = '';
    }
  }
}
