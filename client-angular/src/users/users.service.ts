import 'rxjs/add/operator/let';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app';
import { getUsers } from './reducers/users.selectors';


@Injectable()
export class UsersService {
  users$

  constructor(private store$: Store<AppState>) {
    this.users$ = store$.let(getUsers());
  }
}
