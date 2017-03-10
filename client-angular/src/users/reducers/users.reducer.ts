import { Map } from 'immutable';
import { Action, ActionReducer } from '@ngrx/store';
import { UserData, UserRecord, User, createUser } from '../model/user';
import { UsersActions, FetchUserAction, FetchUserSuccessAction } from '../users.actions';
import { PostData, PostsActions, FetchLatestPostsSucessAction, CommentData } from '../../posts';
import { getSelfLink } from '../../util';


export type UsersState = Map<string, any>;

const initialState = Map<string, any>({
  currentUserId: null
});

export function usersReducer(state = initialState, action: Action): UsersState {

  switch (action.type) {
    case UsersActions.FETCH_USER:
      return state;
    case UsersActions.FETCH_USER_SUCCESS:
      return state;
    case UsersActions.FETCH_USER_FAILED:
      return state;
    case PostsActions.FETCH_LATEST_POSTS_SUCCESS:
      return state.merge(extractPostsUsers(state, action));
    default: return state;
  }
}

function extractPostsUsers(state, action: Action): Map<any, any> {
  const { payload } = <FetchLatestPostsSucessAction>action;
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
