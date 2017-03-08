import { NgModule, ModuleWithProviders } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './backend.service';


@NgModule({
  imports: [
    InMemoryWebApiModule.forRoot(BackendService, {
      delay: 500
    })
  ]
})
export class DevModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DevModule
    }
  }
}
