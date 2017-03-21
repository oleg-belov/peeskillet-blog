import { Map } from 'immutable';
import { Action } from '@ngrx/store';
import { createTag } from '../model/tag';
import { getSelfLink } from '../../util';
import { PostsActions } from '../../posts';


export type TagsState = Map<any, any>;

export const initialStatate = Map();


export function tagsReducer(state = initialStatate, {payload, type}: Action): TagsState {

  switch (type) {
    case PostsActions.FETCH_LATEST_POSTS_SUCCESS:
      if (!payload.postsData) {
        return state;
      }
      return state.merge(extractPostsTags(state, payload));
    default:
      return state;
  }
}

function extractPostsTags(state, payload): Map<any, any> {
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
