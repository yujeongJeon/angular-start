import { StorageService } from './services/storage.service';
import { KrCurrencyPipe } from './components/kr-currency.pipe';
import { OrderService } from './services/order.service';
import { NgModule, ModuleWithProviders } from "@angular/core";

@NgModule({
  declarations: [KrCurrencyPipe],
  exports: [KrCurrencyPipe]
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