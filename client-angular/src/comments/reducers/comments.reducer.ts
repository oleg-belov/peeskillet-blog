import { Map } from 'immutable';
import { Action, ActionReducer } from '@ngrx/store';
import { createComment } from '../model/comment';
import { PostsActions, FetchLatestPostsSucessAction } from '../../posts';
import { getSelfLink } from '../../util';


export type CommentsState = Map<any, any>;

export const initialState = Map();


export function commentsReducer(state = initialState, action: Action): CommentsState {

  switch (action.type) {
    case PostsActions.FETCH_LATEST_POSTS_SUCCESS:
      return state.merge(extractPostsComments(state, action))
    default:
      return state;
  }
}

function extractPostsComments(state, action: Action): Map<any, any> {
  const { payload } = <FetchLatestPostsSucessAction>action;
  const { postsData } = payload;

  return Map().withMutations(map => {
    postsData._embedded.posts.forEach(postData => {
      postData.comments.forEach(commentData => {
        const commentState = state.get(getSelfLink(commentData));
        if (!commentState) {
          const comment = createComment(commentData);
          map.set(comment.id, comment);
        }
      });
    });
  });
}
