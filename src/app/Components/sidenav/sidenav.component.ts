import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
  @ViewChild( 'drawer', { static: false } ) public drawer: MatSidenav;
  public isOpen: boolean;
  public showFiller: boolean;
  constructor() {
    this.isOpen = true;
    this.showFiller = false;
  }

  ngOnInit() {
    this.drawer.open();
  }

}
