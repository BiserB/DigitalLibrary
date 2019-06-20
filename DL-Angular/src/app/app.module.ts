import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResourcesService } from './services/resources.service';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

