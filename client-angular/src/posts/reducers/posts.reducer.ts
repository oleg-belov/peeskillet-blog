import { Map, List } from 'immutable';
import { Action } from '@ngrx/store';
import { getSelfLink } from '../../util';
import { POSTS_PAGE_SIZE } from '../../constants';
import { PostsActions } from '../posts.actions';
import { Post, createPost } from '../model/post';
import { PostsData, Posts } from '../model/posts';


export type PostsState = Map<any, any>;

export const initialState = Map({
  isFetching: false,
  pageSize: 0,
  totalPages: 0,
  totalElements: 0,
  currentPage: 0,
  pagesViewed: List(),
  pagedPostIds: Map({"0": List()})
});


export function postsReducer(state = initialState, action: Action): PostsState {
  const { payload } = action;

  switch (action.type) {
    case PostsActions.FETCH_LATEST_POSTS:
      return state.set('isFetching', true);

    case PostsActions.FETCH_LATEST_POSTS_SUCCESS:
      const { postsData, page, isNew, isModified } = payload;

      if (isNew) {
        return handleIsNew(state, postsData, page);
      } else if (!isNew && isModified) {
        return handleNotNewAndModified(postsData, page);
      } else if (!isNew && !isModified) {
        return state.set('currentPage', page);
      }

      throw new Error('Illegal argument. Acceptable action states are ')
    default: return state;
  }
};

/**
 * If the action consists of the `isNew` flag (an unviewed page)
 * the data should just be merged with the current state.
 * 
 * @param currentState the current state
 * @param data the posts data
 * @param page the new page
 */
function handleIsNew(currentState: Map<string, any>, data: PostsData, page: number) {
  return currentState.withMutations(state => {
    state.set('isFetching', false)
      .merge(updatePagination(data))
      .merge(getPostsDataAsMap(data))
      .mergeIn(['pagedPostIds'], getPagedPostIds(page, data))
      .set('currentPage', page)
      .set('pagesViewed', currentState.get('pagesViewed').push(page));
  });
}

/**
 * If the action consist of the `!isNew` flag (a page already viewed) and
 * the data is modified (new data instead of 304), completely new state
 * should be returned so that there is no stale data.
 * 
 * @param data the posts data
 * @param page the new page
 */
function handleNotNewAndModified(data: PostsData, page: number) {
  return initialState.withMutations(state => {
    state.merge(updatePagination(data))
      .merge(getPostsDataAsMap(data))
      .merge({
        pagedPostIds: <any>getPagedPostIds(page, data),
        currentPage: page,
        pagesViewed: List([page])
      });
  })
}

/**
 * Returns an object with a key of the paged URL and the value
 * being an array of the post ids associated with this page.
 * 
 * @param data the posts data
 */
function getPagedPostIds(page: number, data: PostsData): {[url: string]: string[]} {
  const selfLink = getSelfLink(data);
  return { [`${page}`]: data._embedded.posts.map(post => getSelfLink(post)) };
}

/**
 * Returns an object with ids of the post self links and the values
 * as PostRecords
 * 
 * @param data the posts data
 */
function getPostsDataAsMap(data: PostsData): {[key: string]: Post} {
  const posts = data._embedded.posts;

  return posts.reduce((acc, post) => {
    acc[getSelfLink(post)] = createPost(post);
    return acc;
  }, {});
}

/**
 * Returns an object with the pagination data extracted from the
 * posts data.
 * 
 * @param data the posts data
 */
function updatePagination(data: PostsData) {
  const currentPage = data.page.number + 1;
  const pageSize = data.page.size;
  const totalPages = data.page.totalPages;
  const totalElements = data.page.totalElements;

  return {
    currentPage, pageSize, totalPages, totalElements
  };
}
