import { ViewItemComponent } from './modules/menu/components/view-item/view-item.component';
import { PwHomeComponent } from './modules/menu/components/pw-home/pw-home.component';
import { ViewFooterComponent } from './components/view-footer/view-footer.component';
import { ViewWrapperComponent } from './components/view-wrapper/view-wrapper.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewHeaderComponent } from './components/view-header/view-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewHeaderComponent,
    ViewWrapperComponent,
    ViewFooterComponent,
    PwHomeComponent,
    ViewItemComponent
  ],
  imports: [
    BrowserModule,
    //ReactiveFormsModule,
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
