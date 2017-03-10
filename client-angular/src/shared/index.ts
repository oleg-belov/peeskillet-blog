import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EllipsisPipe } from './pipes/ellipsis';


export { EllipsisPipe };


@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    RouterModule,

    EllipsisPipe
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
