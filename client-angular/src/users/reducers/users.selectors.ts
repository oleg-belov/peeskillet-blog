import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

import { Selector } from '../../core';
import { AppState } from '../../app';
import { UsersState } from './users.reducer';


export function getUsers(): Selector<AppState, UsersState> {
  return state$ => state$
    .map(state => state.users)
    .distinctUntilChanged();
}
