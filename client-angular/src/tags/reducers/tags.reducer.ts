import { Map } from 'immutable';
import { Action } from '@ngrx/store';
import { createTag } from '../model/tag';
import { getSelfLink } from '../../util';
import { PostsActions, FetchLatestPostsSucessAction } from '../../posts';


export type TagsState = Map<any, any>;

export const initialStatate = Map();


export function tagsReducer(state = initialStatate, action: Action): TagsState {

  switch (action.type) {
    case PostsActions.FETCH_LATEST_POSTS_SUCCESS:
      return state.merge(extractPostsTags(state, action));
    default:
      return state;
  }
}

function extractPostsTags(state, action: Action): Map<any, any> {
  const { payload } = <FetchLatestPostsSucessAction>action;
  const { postsData } = payload;

  return Map().withMutations(map => {
    postsData._embedded.posts.forEach(postData => {
      postData.tags.forEach(tagData => {
        const tagState = state.get(getSelfLink(tagData));
        if (!tagState) {
          let tag = createTag(tagData);
          map.set(tag.id, tag);
        }
      });
    });
  });
}
