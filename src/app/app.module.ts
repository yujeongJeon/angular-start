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
import { CtCounterComponent } from './modules/menu/components/ct-counter/ct-counter.component';
import { CtOrderListComponent } from './modules/menu/components/ct-order-list/ct-order-list.component';
import { KrCurrencyPipe } from './pipes/kr-currency.pipe';
import { ViewOrderItemComponent } from './modules/menu/components/view-order-item/view-order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewHeaderComponent,
    ViewWrapperComponent,
    ViewFooterComponent,
    PwHomeComponent,
    ViewItemComponent,
    CtCounterComponent,
    CtOrderListComponent,
    ViewOrderItemComponent,
    KrCurrencyPipe
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
