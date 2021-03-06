import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCalendarComponent } from './view-calendar/view-calendar.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersViewComponent } from './users-view/users-view.component';
// import { ViewCalendarComponent } from './view-calendar/view-calendar.component';

const routes: Routes = [
  { path: 'user-list/:id', component: UsersListComponent },
  { path: 'user-add', component: UsersAddComponent }, 
  { path: 'view-calendar', component: ViewCalendarComponent }, 
  { path: 'user-edit/:id', component: UsersEditComponent }, 
  { path: 'user-view/:id', component: UsersViewComponent }, 
  { path: 'user-view/:id', component: UsersViewComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { } 
