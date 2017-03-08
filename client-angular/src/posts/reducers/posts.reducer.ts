import { Map } from 'immutable';
import { Action, ActionReducer } from '@ngrx/store';
import { PostRecord, createPost, PostData } from '../model/post';
import { PostsActions, FetchLatestPostsSucessAction } from '../posts.actions';


export type PostsState = Map<any, any>;

export const initialState = Map({
  hasLoadedLatest: false,
  isFetching: false
});

export const postsReducer: ActionReducer<PostsState>
    = (state = initialState, action: Action) => {
    
  switch (action.type) {
    case PostsActions.FETCH_LATEST_POSTS:
      if (!state.get('hasLoadedLatest')) {
        return state.set('isFetching', true);
      }
    case PostsActions.FETCH_LATEST_POSTS_SUCCESS:
      return state.withMutations(map => {
        map.set('isFetching', false);
        map.merge(getPostsDataAsMap(action))
      })
    default: return state;
  }
};

function getPostsDataAsMap(action): Map<any, any> {
  const { payload } = <FetchLatestPostsSucessAction>action;
  const { postsData } = payload;

  return Map().withMutations(map => {
    const posts = postsData.entities.posts;
    for (let postId in posts) {
      if (posts.hasOwnProperty(postId)) {
        map.set(postId, createPost(posts[postId]));
      }
    }
  });
}
