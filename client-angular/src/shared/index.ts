import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EllipsisPipe } from './pipes/ellipsis';
import { BootstrapModule } from './bootstrap';
import { LoadingIndicatorComponent } from './components/loading-indicator';

import { PaginationService } from './pagination';


export { EllipsisPipe };


@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    RouterModule,
    BootstrapModule,

    EllipsisPipe,
    LoadingIndicatorComponent,
  ],
  declarations: [
    EllipsisPipe,
    LoadingIndicatorComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        PaginationService
      ]
    }
  }
}
