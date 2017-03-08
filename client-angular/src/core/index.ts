import { NgModule, ModuleWithProviders } from '@angular/core';

import { Configuration } from './services/configuration';
import { environment as env } from '../environments/environment';


export { Configuration };
export { Selector } from './interfaces';


export function configurationFactory() {
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
