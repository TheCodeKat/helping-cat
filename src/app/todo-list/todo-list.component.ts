import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(public todoService: TodoService) {
    
  }

  ngOnInit(): void {
  }

  addRandomTodo(){
    this.todoService.addTodo({name: 'Put my clothes in their place', done: false})
  }

}
