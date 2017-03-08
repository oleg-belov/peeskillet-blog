import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

import { Selector } from '../../core';
import { AppState } from '../../app';
import { PostsState } from './posts.reducer';


export function getPosts(): Selector<AppState, PostsState> {
  return state$ => state$
    .map(state => state.posts)
    .distinctUntilChanged();
}
