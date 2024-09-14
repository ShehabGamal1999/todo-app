import { bootstrapApplication } from '@angular/platform-browser';
import { TodoWrapperComponent } from './app/todo-wrapper/todo-wrapper.component';

bootstrapApplication(TodoWrapperComponent).catch((err) => console.error(err));
