import 'rxjs/add/operator/map';

import { Component, ViewEncapsulation } from '@angular/core';
import { Http , Response} from '@angular/http';


@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

}
