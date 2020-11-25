import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRequestRoutingModule } from './user-request-routing.module';
import { RequestListComponent } from './request-list/request-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { InterpreterListComponent } from './interpreter-list/interpreter-list.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [RequestListComponent, InterpreterListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    TagInputModule,
    NgbModule,
    UserRequestRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBC_D6nmnxc-Og6sZJ_hfuxRbHcJB9Is38'
    })
  ]
})
export class UserRequestModule { }
