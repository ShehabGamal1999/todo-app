import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos: { id: number; title: string; completed: boolean }[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();
}
