import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/project.service';
import { Project } from '../../Models/Project';
import { Task } from '../../Models/Task';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class TicketListComponent implements OnInit {
  public currentProject: Project;
  public tableData: Task[];
  public displayedColumns: string[];
  public progressColor: ThemePalette = 'warn';
  public expandedTask: Task | null;

  constructor(private projectService: ProjectService) {
    this.currentProject = projectService.getActiveProject();
    // TODO: Add "assigned", "status",
    // this.displayedColumns = ['Task Number', 'Story', 'Progress', 'Submitted', 'Due'];

    // TODO: Set up a table that can be expended when the row is clicked....or maybe a modal
    this.displayedColumns = ['id', 'story', 'progress', 'submitted', 'assignedTo'];
    this.tableData = this.currentProject.tasks;
  }

  ngOnInit() {
  }

}
