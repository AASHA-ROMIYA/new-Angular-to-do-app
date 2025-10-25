import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,TaskForm,TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('My Task List App');
  taskList:{ name: string; done: boolean }[]=[
    
  ];
  ngOnInit(): void {
      this.getLocalData();
  }
  getLocalData(){
    const  storedtask=localStorage.getItem('my_tasks');
   if(storedtask){
    this.taskList=JSON.parse(storedtask);
   }
  }
}
