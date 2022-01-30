import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/Todo';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {
  sno: number;
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todos> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  getRandomInt(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  onSubmit(){
    let min: number=10;
    let max: number=100;
    const todo = {
      sno: this.getRandomInt(min,max),
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }


}
