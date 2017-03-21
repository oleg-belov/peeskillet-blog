import 'rxjs/add/operator/let';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app';
import { getPagination } from './selectors';


@Injectable()
export class PaginationService {
  lastsPostPagination$;

  constructor(store$: Store<AppState>) {
    this.lastsPostPagination$ = store$.let(getPagination('latestPostsPagination'));
  }
}
