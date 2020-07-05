import { SharedModule } from './../shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';
import { CommonModule } from '@angular/common';
import { PwHomeComponent } from './components/pw-home/pw-home.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    PwHomeComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ]
})
export class OrderModule {}