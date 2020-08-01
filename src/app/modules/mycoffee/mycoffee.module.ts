import { SharedModule } from '../shared/shared.module';
import { ViewOrderItemComponent } from './components/view-order-item/view-order-item.component';
import { CommonModule } from '@angular/common';
import { PwHomeComponent } from './components/pw-home/pw-home.component';
import { MycoffeeRoutingModule } from './mycoffee-routing.module';
import { NgModule } from "@angular/core";
import { PwDetailComponent } from './components/pw-detail/pw-detail.component';

@NgModule({
  declarations: [
    PwHomeComponent,
    PwDetailComponent,
    ViewOrderItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MycoffeeRoutingModule,
  ]
})
export class MycoffeeModule {}