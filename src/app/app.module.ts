import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import {
  MatBadgeModule,
  MatButtonModule, MatCardModule, MatChipsModule,
  MatIconModule,
  MatListModule,
  MatMenuModule, MatProgressBarModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopbarComponent } from './Components/topbar/topbar.component';
import { TaskCardComponent } from './Components/task-card/task-card.component';
import { TicketListComponent } from './Components/ticket-list/ticket-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopbarComponent,
    TaskCardComponent,
    TicketListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
