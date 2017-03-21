import { NgModule, ModuleWithProviders } from '@angular/core';
import { UsersService } from './users.service';
import { UsersActions } from './users.actions';


export { UsersService, UsersActions };

export { User, UserData, UserRecord, createUser } from './model/user';
export { usersReducer, UsersState } from './reducers/users.reducer';
export { getUsers } from './reducers/users.selectors';


@NgModule({

})
export class UsersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UsersModule,
      providers: [
        UsersActions,
        UsersService
      ]
    }
  }
}
