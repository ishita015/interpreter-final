import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { GooglePlaceModule } from "ngx-google-places-autocomplete";
// import { BrowserModule } from '@angular/platform-browser';
import { TagInputModule } from 'ngx-chips';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [UsersAddComponent, UsersEditComponent, UsersListComponent, UsersViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    TagInputModule,
    NgbModule,
    UsersRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBC_D6nmnxc-Og6sZJ_hfuxRbHcJB9Is38',//'AIzaSyBkH1R6_PO7fNY5L0z6CvV00oeNX8Vn0iE', 
      libraries: ['places']
    })
    // GooglePlaceModule,
    // BrowserModule
  ]
})
export class UsersModule { }
