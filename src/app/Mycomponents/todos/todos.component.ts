import { Component, OnInit } from '@angular/core';
import {Todos} from '../../Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos: Todos[]
  constructor() {
    this.localItem = localStorage.getItem("todos") as string;
    
    if(this.localItem == null){
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
   }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todos){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  addTodo(todo: Todos){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  toggleTodo(todo: Todos){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

}
