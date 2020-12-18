import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTES } from './app.routes';
import { RouterModule, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MiddleComponent } from './components/middle/middle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MiddleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash:false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
