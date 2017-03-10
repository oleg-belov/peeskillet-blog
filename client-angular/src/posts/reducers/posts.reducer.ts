import { Map } from 'immutable';
import { Action, ActionReducer } from '@ngrx/store';
import { PostRecord, createPost, PostData } from '../model/post';
import { PostsActions, FetchLatestPostsSucessAction } from '../posts.actions';
import { getSelfLink } from '../../util';


export type PostsState = Map<any, any>;

export const initialState = Map({
  hasLoadedLatest: false,
  isFetching: false
});

export function postsReducer(state = initialState, action: Action): PostsState {
    
  switch (action.type) {
    case PostsActions.FETCH_LATEST_POSTS:
      if (!state.get('hasLoadedLatest')) {
        return state.set('isFetching', true);
      }
    case PostsActions.FETCH_LATEST_POSTS_SUCCESS:
      return state.withMutations(map => {
        map.set('isFetching', false);
        map.set('hasLoadedLatest', true);
        map.merge(getPostsDataAsMap(action))
      })
    default: return state;
  }
};

function getPostsDataAsMap(action: Action): Map<any, any> {
  const { payload } = <FetchLatestPostsSucessAction>action;
  const { postsData } = payload;
  const posts = postsData._embedded.posts;

  return Map().withMutations(map => {
    posts.forEach(post => {
      map.set(getSelfLink(post), createPost(post));
    });
  });
}
