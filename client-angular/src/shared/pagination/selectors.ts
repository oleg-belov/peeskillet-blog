import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

import { Selector } from '../../core';
import { AppState } from '../../app';
import { Pagination } from './pagination';


export type PaginationType
    = 'latestPostsPagination';


export function getPagination(type: PaginationType): Selector<AppState, Pagination> {
  return state$ => state$
    .map(state => state[type])
    .distinctUntilChanged();
}
