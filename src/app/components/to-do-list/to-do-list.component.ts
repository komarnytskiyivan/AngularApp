import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo'
@Component({
  selector: 'todo-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  constructor() { }

  ngOnInit(): void {
    this.todoTitle = '';
    this.idForTodo = 4;
    this.todos = [
      {
        'id': 1,
        'title': 'Finish Angular Screencast'
      },
      {
        'id': 2,
        'title': 'Take over world'
      },
      {
        'id': 3,
        'title': 'One more thing'
      },
    ];
  }
  addTodo(): void{
    if(this.todoTitle.trim().length === 0){
      return;
    }
    this.todos.push({
      id: 4,
      title: this.todoTitle
    })
    this.todoTitle = '';
    this.idForTodo++;
  }
  deleteTodo(id: number): void{
    this.todos = this.todos.filter(todo => todo.id != id)
  }
}