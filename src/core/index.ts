import { NgModule, ModuleWithProviders } from '@angular/core';

import { Configuration } from './services/configuration';
import { environment as env } from '../environments/environment';


function configurationFactory() {
  return new Configuration()
    .setBaseApiUrl(env.baseApiUrl)
}


@NgModule({})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: Configuration, useFactory: configurationFactory }
      ]
    }
  }
}
