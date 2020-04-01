import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Praktium1Component } from './pages/praktium1/praktium1.component';
import { Praktikum2Component } from './pages/praktikum2/praktikum2.component';
import { Praktikum3Component } from './pages/praktikum3/praktikum3.component';

@NgModule({
  declarations: [
    AppComponent,
    Praktium1Component,
    Praktikum2Component,
    Praktikum3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
