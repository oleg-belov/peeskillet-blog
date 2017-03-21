import { Map } from 'immutable';
import { Action, ActionReducer } from '@ngrx/store';
import { UserData, UserRecord, User, createUser } from '../model/user';
import { UsersActions } from '../users.actions';
import { PostData, PostsActions } from '../../posts';
import { CommentData } from '../../comments';
import { getSelfLink } from '../../util';


export type UsersState = Map<string, any>;

const initialState = Map<string, any>({
  currentUserId: null
});

export function usersReducer(state = initialState, {payload, type}: Action): UsersState {

  switch (type) {
    case UsersActions.FETCH_USER:
      return state;
    case UsersActions.FETCH_USER_SUCCESS:
      return state;
    case UsersActions.FETCH_USER_FAILED:
      return state;
    case PostsActions.FETCH_LATEST_POSTS_SUCCESS:
      if (!payload.postsData) {
        return state;
      }
      return state.merge(extractPostsUsers(state, payload));
    default: return state;
  }
}

function extractPostsUsers(state, payload): Map<any, any> {
  const { postsData } = payload;

  return Map().withMutations(map => {
    postsData._embedded.posts.forEach(postData => {
      handlePostUserData(state, map, postData);
      handleCommentUserData(state, map, postData.comments)
    })
  })
}

function handleUserData(state, mutableMap: Map<any, any>, userData: UserData): void { 
  const userState = state.get(getSelfLink(userData));
  if (!userState) {
    const user = createUser(userData);
    mutableMap.set(user.id, user);
  }
}

function handlePostUserData(state, mutableMap: Map<any, any>, postData: PostData) {
  handleUserData(state, mutableMap, postData.author);
}

function handleCommentUserData(state, mutableMap: Map<any, any>, comments: CommentData[]): void {
  comments.forEach(comment => {
    handleUserData(state, mutableMap, comment.author);
  });
}
