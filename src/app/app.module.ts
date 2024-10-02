import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-rounting.module';

import { AppComponent } from './app.component';
import { LeafletModule } from '@bluehalo/ngx-leaflet';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LeafletModule,
  ],
  providers: [provideHttpClient()], // nueva actualizacion de angular
  bootstrap: [AppComponent]
})
export class AppModule { }
