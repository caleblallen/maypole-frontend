import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectService } from '../../Services/project.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass'],
  providers: [ProjectService]
})
export class TopbarComponent implements OnInit {
  @Output() navToggle: EventEmitter<any> = new EventEmitter<any>();
  constructor(public proj: ProjectService) { }

  ngOnInit() {
  }

}
