import { SharedModule } from './../shared/shared.module';
import { PwDetailComponent } from './components/pw-detail/pw-detail.component';
import { KrCurrencyPipe } from './../../pipes/kr-currency.pipe';
import { MenuRoutingModule } from './menu-routing.module';
import { CtOrderListComponent } from './components/ct-order-list/ct-order-list.component';
import { CtCounterComponent } from './components/ct-counter/ct-counter.component';
import { ViewOrderItemComponent } from './components/view-order-item/view-order-item.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { PwHomeComponent } from './components/pw-home/pw-home.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PwHomeComponent,
    PwDetailComponent,
    ViewItemComponent,
    ViewOrderItemComponent,
    CtCounterComponent,
    CtOrderListComponent,
    KrCurrencyPipe
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ],
  providers: []
})
export class MenuModule {}