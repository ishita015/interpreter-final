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
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgxSpinnerModule } from "ngx-spinner";

// const config: SocketIoConfig = { url: 'http://192.168.0.69:3300', options: {} }; //mt local server
// const config: SocketIoConfig = { url: 'http://192.168.0.4:3300', options: {} }; //live server(4004)
const config: SocketIoConfig = { url: 'http://103.15.67.78:3300', options: {} }; //live server(4004) final url


@NgModule({
  declarations: [
    AppComponent,
    //SetroleComponent,
  ],
  imports: [
    BrowserModule,NgxSpinnerModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
