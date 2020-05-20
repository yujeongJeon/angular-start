import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './app-header/app-header.component'
import { ProductList } from './product-list/product-list.component';
import { ProductModal } from './product-modal/product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    ProductList,
    ProductModal
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
