import { Map } from 'immutable';
import { Action, ActionReducer } from '@ngrx/store';
import { UserData, UserRecord, User } from '../model/user';
import { UserActions, FetchUserAction, FetchUserSuccessAction } from '../user.actions';


export type UsersState = Map<string, any>;

const initialState = Map<string, any>({
  currentUserId: null
});

export const usersReducer: ActionReducer<UsersState>
    = (state = initialState, action: Action) => {

  switch (action.type) {
    case UserActions.FETCH_USER:
      return state;
    case UserActions.FETCH_USER_SUCCESS:
      return state;
    case UserActions.FETCH_USER_FAILED:
      return state;
    default: return state;
  }
}

