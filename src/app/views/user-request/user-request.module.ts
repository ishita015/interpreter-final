import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRequestRoutingModule } from './user-request-routing.module';
import { RequestListComponent } from './request-list/request-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [RequestListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    TagInputModule,
    NgbModule,
    UserRequestRoutingModule
  ]
})
export class UserRequestModule { }
