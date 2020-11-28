import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './views/profile/change-password/change-password.component';
import { AdminProfileComponent } from './views/profile/admin-profile/admin-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
    AdminProfileComponent,
    //SetroleComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
