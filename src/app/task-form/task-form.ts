import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm implements OnInit{
  task:string="";
   @Input("taskList") taskList:{ name: string; done: boolean }[]=[];
  addTodo(){
    if(this.task.trim()!==""){
    this.taskList.unshift({ name: this.task, done: false });
    this.task="";
    this.saveTaskLocal();
    }
      
  }
ngOnInit(): void {
    
}
constructor(){}
saveTaskLocal(){
  localStorage.setItem('my_tasks',JSON.stringify(this.taskList));
}
}
