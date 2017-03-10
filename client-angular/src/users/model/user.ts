import { Map, Record } from 'immutable';
import { getSelfLink, getLink } from '../../util';


export interface UserData {
  name: string;
  username: string;
  email: string;
  location: string;
  avatarUrl: string;
  dateCreated: string;
  _links: {
    self: { href: string; },
    posts: { href: string; },
    comments: { href: string; }
  }
}

export interface User extends Map<string, any> {
  id: string;
  name: string;
  username: string;
  email: string;
  location: string;
  avatarUrl: string;
  dateCreated: Date;
  postsLink: string;
  commentsLink: string;
  isFetching: boolean;
  hasCompleteData: boolean;
}

export const UserRecord = Record({
  id: null,
  name: null,
  username: null,
  email: null,
  location: null,
  avatarUrl: null,
  dateCreated: null,
  postsLink: null,
  commentsLink: null,
  isFetching: false,
  hasCompleteData: false
});

export function createUser(data: UserData): User {
  return new UserRecord({

    id: getSelfLink(data),
    name: data.name,
    username: data.username,
    email: data.email,
    location: data.location,
    avatarUrl: data.avatarUrl,
    dataCreated: new Date(data.dateCreated),
    postsLink: getLink(data, 'posts'),
    commentsLink: getLink(data, 'comment')

  }) as User;
}

