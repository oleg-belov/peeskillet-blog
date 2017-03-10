import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  NgbCollapseModule,
  NgbDropdownModule
} from '@ng-bootstrap/ng-bootstrap';


const BOOTSTRAP_MODULES = [
  NgbCollapseModule,
  NgbDropdownModule
];


@NgModule({
  imports: [
    NgbCollapseModule.forRoot(),
    NgbDropdownModule.forRoot()
  ],
  exports: BOOTSTRAP_MODULES
})
export class BootstrapRootModule {}


@NgModule({
  imports: BOOTSTRAP_MODULES,
  exports: BOOTSTRAP_MODULES
})
export class BootstrapModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BootstrapRootModule
    }
  }
}
