import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule ({
  imports: [
    SharedModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class LayoutModule {
  
}