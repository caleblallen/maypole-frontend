import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCardComponent } from './Components/task-card/task-card.component';
import { TicketListComponent } from './Components/ticket-list/ticket-list.component';


const routes: Routes = [
  {path: 'task', component: TaskCardComponent},
  {path: 'project', component: TicketListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
