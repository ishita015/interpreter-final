import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path:'admin-profile',component:AdminProfileComponent},
  {path:'change-password',component:ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
