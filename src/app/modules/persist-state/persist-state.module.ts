import { LocalStorageService } from './services/local-storage.service';
import { NgModule, ModuleWithProviders } from "@angular/core";

@NgModule({
})
export class PersistStateModule {
  static forRoot():ModuleWithProviders{
    return {
      ngModule: PersistStateModule,
      providers: [LocalStorageService]
    }
  }
}