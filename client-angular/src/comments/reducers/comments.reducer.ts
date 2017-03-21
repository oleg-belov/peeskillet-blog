import { Map } from 'immutable';
import { Action, ActionReducer } from '@ngrx/store';
import { createComment } from '../model/comment';
import { PostsActions } from '../../posts';
import { getSelfLink } from '../../util';


export type CommentsState = Map<any, any>;

export const initialState = Map();


export function commentsReducer(state = initialState, {payload, type}: Action): CommentsState {
 
  switch (type) {
    case PostsActions.FETCH_LATEST_POSTS_SUCCESS:
      if (!payload.postsData) {
        return state;
      }
      return state.merge(extractPostsComments(state, payload))
    default:
      return state;
  }
}

function extractPostsComments(state, payload): Map<any, any> {
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
