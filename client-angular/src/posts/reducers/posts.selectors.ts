import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/distinctUntilChanged';

import { List } from 'immutable';
import { Selector } from '../../core';
import { AppState } from '../../app';
import { PostsState } from './posts.reducer';
import { Post } from '../model/post';


export function getPosts(): Selector<AppState, PostsState> {
  return state$ => state$
    .map(state => state.posts)
    .distinctUntilChanged();
}

export function getCurrentPage(): Selector<AppState, string> {
  return state$ => state$
    .let(getPosts())
    .map(posts => `${posts.get('currentPage')}`)
    .distinctUntilChanged();
}

export function getLatestPosts(): Selector<AppState, List<Post>> {
  return state$ => state$
    .let(getCurrentPage())
    .withLatestFrom(state$.let(getPosts()), (currentPage, posts) => {
      return posts.get('pagedPostIds').get(currentPage)
        .map(id => posts.get(id)) as List<Post>;
    });
}
