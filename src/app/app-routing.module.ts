import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCardComponent } from './Components/task-card/task-card.component';


const routes: Routes = [
  {path: 'task', component: TaskCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
