import { OrderEffects } from './effects/order.effects';
import { FormGroupComponent } from './components/formgroup/formgroup.component';
import { StorageService } from './services/storage.service';
import { KrCurrencyPipe } from './components/kr-currency.pipe';
import { OrderService } from './services/order.service';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [KrCurrencyPipe, FormGroupComponent],
  exports: [KrCurrencyPipe, FormGroupComponent],
  imports: [
    EffectsModule.forFeature([OrderEffects])
  ]
})
export class SharedModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        OrderService,
        StorageService
      ]
    }
  }
}
