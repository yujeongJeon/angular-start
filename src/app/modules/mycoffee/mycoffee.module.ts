import { ViewOrderItemComponent } from './components/view-order-item/view-order-item.component';
import { CommonModule } from '@angular/common';
import { PwHomeComponent } from './components/pw-home/pw-home.component';
import { MycoffeeRoutingModule } from './mycoffee-routing.module';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    PwHomeComponent,
    ViewOrderItemComponent
  ],
  imports: [
    CommonModule,
    MycoffeeRoutingModule
  ]
})
export class MycoffeeModule {}