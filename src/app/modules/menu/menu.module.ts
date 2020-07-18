import { MenuEffects } from './effects/menu.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuService } from './services/menu.service';
import { CtSearchComponent } from './components/ct-search-input/ct-search-input.component';
import { SharedModule } from './../shared/shared.module';
import { PwDetailComponent } from './components/pw-detail/pw-detail.component';
import { MenuRoutingModule } from './menu-routing.module';
import { CtOrderListComponent } from './components/ct-order-list/ct-order-list.component';
import { CtCounterComponent } from './components/ct-counter/ct-counter.component';
import { ViewOrderItemComponent } from './components/view-order-item/view-order-item.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { PwHomeComponent } from './components/pw-home/pw-home.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    PwHomeComponent,
    PwDetailComponent,
    ViewItemComponent,
    ViewOrderItemComponent,
    CtCounterComponent,
    CtOrderListComponent,
    CtSearchComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([MenuEffects]),
  ],
  providers: [MenuService]
})
export class MenuModule {}