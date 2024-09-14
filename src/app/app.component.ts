import { Component } from '@angular/core';
import { TodoWrapperComponent } from './todo-wrapper/todo-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoWrapperComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
