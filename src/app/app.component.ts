import { Component, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'maypole-frontend';
  public drawerToggle: Subject<void> = new Subject<void>();

  passToggle() {
    this.drawerToggle.next();
  }
}

