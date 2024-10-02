import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    AboutPagesComponent,
    HomePageComponent,
    ContactPageComponent,
    SidebarComponent,
    SearchBoxComponent,
    NavBarComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    AboutPagesComponent,
    ContactPageComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
    NavBarComponent,
    TableComponent,
  ]
})
export class SharedModule { }
