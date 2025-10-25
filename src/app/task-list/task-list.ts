import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../filter-pipe-pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipePipe],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskList implements OnInit {
  @Input() taskList: { name: string; done: boolean }[] = [];
  searchText: string = '';

  ngOnInit(): void {}

  removeTask(index: number) {
    this.taskList.splice(index, 1);
    this.saveTaskLocal();
  }

  saveTaskLocal() {
    localStorage.setItem('my_tasks', JSON.stringify(this.taskList));
  }
}
