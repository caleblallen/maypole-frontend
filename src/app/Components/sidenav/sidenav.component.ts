import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { FocusOrigin } from '@angular/cdk/a11y';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
  @ViewChild( 'drawer', { static: false } ) public drawer: MatSidenav;
  @Input() navToggleObservable: Observable<any>;
  public isOpen: boolean;
  public showFiller: boolean;
  // private toggleDrawer: ( isOpen?: boolean, openedVia?: FocusOrigin ) => Promise<MatDrawerToggleResult>;
  constructor() {
    this.isOpen = true;
    this.showFiller = false;

    // this.toggleDrawer = this.drawer.toggle;


  }

  ngOnInit() {
    // this.drawer.open();
    this.navToggleObservable.subscribe( () => this.drawer.toggle());
  }

}
