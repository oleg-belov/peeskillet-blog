import { Map, Record } from 'immutable';


export interface UserData {
  username: string;
  name: string;
  avatarUrl: string;
  email: string;
  hometown: string;
}

export interface User extends Map<string, any> {
  username: string;
  name: string;
  avatarUrl: string;
  email: string;
  hometown: string;
  isFetching: boolean;
}

export const UserRecord = Record({
  username: null,
  name: null,
  avatarUrl: null,
  avatarBase64: null,
  email: null,
  hometown: null,
  isFetching: false
});

export function createUser(data: UserData): User {
  return new UserRecord({

    username: data.username,
    name: data.username,
    avatarUrl: data.avatarUrl,
    email: data.email,
    hometown: data.hometown

  }) as User;
}

