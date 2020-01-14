import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/project.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.sass'],
  providers: [ProjectService]
})
export class TaskCardComponent implements OnInit {

  constructor(public proj: ProjectService) { }

  ngOnInit() {
  }

}
