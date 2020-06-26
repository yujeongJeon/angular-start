import { CartRoutingModule } from './cart-routing.module';

import { NgModule } from '@angular/core';
import { PwHomeComponent } from './components/pw-home/pw-home.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    PwHomeComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule {}