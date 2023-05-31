import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskList = ['eat', 'workout']
  taskInput: string = ''

  newTask(){
    this.taskList.push(this.taskInput)
    this.taskInput = ''
  }
}
