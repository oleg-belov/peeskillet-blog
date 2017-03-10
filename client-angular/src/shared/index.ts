import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EllipsisPipe } from './pipes/ellipsis';
import { BootstrapModule } from './bootstrap';


export { EllipsisPipe };


@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    RouterModule,

    EllipsisPipe,
    BootstrapModule
  ],
  declarations: [
    EllipsisPipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
