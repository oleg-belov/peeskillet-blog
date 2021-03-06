import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';


const BOOTSTRAP_MODULES = [
  NgbCollapseModule,
  NgbDropdownModule,
  NgbPaginationModule
];


@NgModule({
  imports: [
    NgbCollapseModule.forRoot(),
    NgbDropdownModule.forRoot(),
    NgbPaginationModule.forRoot()
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
