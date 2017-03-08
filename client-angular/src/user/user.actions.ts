import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { UserData } from './model/user';
import { Schema } from 'normalizr';
import { userSchema } from '../data';


@Injectable()
export class UserActions {
  static readonly FETCH_USER = 'FETCH_USER';
  static readonly FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
  static readonly FETCH_USER_FAILED = 'FETCH_USER_FAILED';
  

  static readonly LOAD_USER = 'LOAD_USER';


  fetchUser(userUrl: string): FetchUserAction {
    return {
      type: UserActions.FETCH_USER,
      payload: { userUrl }
    }
  }

  fetchUserSuccess(userData: UserData): FetchUserSuccessAction {
    return {
      type: UserActions.FETCH_USER_SUCCESS,
      payload: {
        userData,
        schema: userSchema
      }
    }
  }

  fetchUserFailed(error: any): Action {
    return {
      type: UserActions.FETCH_USER_FAILED,
      payload: error
    }
  }

}

export interface FetchUserAction extends Action {
  payload: {
    userUrl: string;
  }
}

export interface FetchUserSuccessAction extends Action {
  payload: {
    userData: UserData,
    schema: Schema
  }
}