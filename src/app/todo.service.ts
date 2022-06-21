import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly todos$ = new BehaviorSubject<Todo[]>([]);

  constructor() { }

  addTodo(todo: Todo){
    const updatedArray = this.todos$.getValue();
    updatedArray.push(todo);
    this.todos$.next(updatedArray);
  }
}
