import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/let';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { PostsService } from './posts.service';
import { PostsActions } from './posts.actions';
import { getPosts } from './reducers/posts.selectors';
import { AppState } from '../app';


@Injectable()
export class PostsEffects {

  constructor(private postsService: PostsService,
              private store$: Store<AppState>,
              private actions: PostsActions,
              private actions$: Actions) {}


  @Effect()
  fetchLatestPosts$ = this.actions$
    .ofType(PostsActions.FETCH_LATEST_POSTS)
    .withLatestFrom(this.store$.let(getPosts()), (action, posts) => ({
      payload: action.payload,
      posts
    }))
    .filter(({posts}) => !posts.get('hasLoadedLatest'))
    .switchMap(({payload}) => this.postsService.fetchPosts(payload.postsUrl)
      .map(data => this.actions.fetchLatestPostsSuccess(data))
      .catch(error => Observable.of(this.actions.fetchLatestPostsFailed(error))));
}
