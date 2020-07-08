import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos : Todo[];
  constructor() {
    this.todos = [
      {
        id: '111',
        title: "Learn JavaScript",
        isCompleted: true,
        date: new Date()
      },
      {
        id: '222',
        title: "Learn Angular",
        isCompleted: false,
        date: new Date()
      },
      {
        id: '333',
        title: "Learn React",
        isCompleted: false,
        date: new Date()
      },
    ];
  }

  /*
  C   =>    addTodo()
  R   =>    getTodos()
  U   =>    changeStatus()
  D   =>    deleteTodo()
  */

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
  }

  getTodos = () => {
    return of(this.todos);
  }

  changeStatus = (todo: Todo) => {
    this.todos.map(singleTodo => {
      if(singleTodo.id === todo.id) {
        singleTodo.isCompleted = !singleTodo.isCompleted;
      }
    })
  }

  deleteTodo = (todo:Todo) => {
    const indexOfTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    );
    this.todos.splice(indexOfTodo, 1);
  }
}
