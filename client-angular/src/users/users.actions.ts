import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { UserData } from './model/user';


@Injectable()
export class UsersActions {
  static readonly FETCH_USER = 'FETCH_USER';
  static readonly FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
  static readonly FETCH_USER_FAILED = 'FETCH_USER_FAILED';
  
  static readonly LOAD_USER = 'LOAD_USER';


  fetchUser(userUrl: string): Action {
    return {
      type: UsersActions.FETCH_USER,
      payload: { userUrl }
    }
  }

  fetchUserSuccess(userData: UserData): Action {
    return {
      type: UsersActions.FETCH_USER_SUCCESS,
      payload: {
        userData
      }
    }
  }

  fetchUserFailed(error: any): Action {
    return {
      type: UsersActions.FETCH_USER_FAILED,
      payload: error
    }
  }

}
