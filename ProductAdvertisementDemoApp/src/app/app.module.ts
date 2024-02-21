import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { DataViewModule } from 'primeng/dataview'; 
// import { SlickCarouselModule } from 'ngx-slick-carousel'; 


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductInfoComponent } from './components/product-info.component';

import { ProductAdComponent } from './components/product-ad/product-ad.component';

@NgModule({
  declarations: [
    AppComponent,ProductInfoComponent, ProductAdComponent
  ],  
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, HttpClientModule, DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
