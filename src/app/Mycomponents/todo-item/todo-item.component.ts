import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todos> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  delete(todo: Todos): void{
    this.todoDelete.emit(todo);
    console.log('Delete Sucess');
  }
  onCheckBox(todo:Todos):void{
    this.todoCheckBox.emit(todo)
  }

}
