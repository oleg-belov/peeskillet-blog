import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/distinctUntilChanged';

import { Selector } from '../../core';
import { AppState } from '../../app';
import { PostsState } from './posts.reducer';


export function getPosts(): Selector<AppState, PostsState> {
  return state$ => state$
    .map(state => state.posts)
    .distinctUntilChanged();
}

export function getLatestPosts(amount = 5): Selector<AppState, any> {
  return state$ => state$
    .let(getPosts())
    .map(state => {
      const sorted = state
        .filter((val, key) => key !== 'isFetching' && key !== 'hasLoadedLatest')
        .sort((postA, postB) => postA.createdDate - postB.createdDate);
      return Array.from(<any>sorted.values()).slice(0, amount)
    });
}
