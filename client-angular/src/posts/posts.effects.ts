import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/let';
import 'rxjs/add/observable/of';

import { Map } from 'immutable';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { PostsService } from './posts.service';
import { PostsActions } from './posts.actions';
import { getPosts } from './reducers/posts.selectors';
import { getPagination } from '../shared/pagination';
import { AppState } from '../app';


@Injectable()
export class PostsEffects {

  constructor(private postsService: PostsService,
              private store$: Store<AppState>,
              private postActions: PostsActions,
              private actions$: Actions) { }


  @Effect()
  fetchLatestPosts$ = this.actions$
    .ofType(PostsActions.FETCH_LATEST_POSTS)
    .withLatestFrom(this.store$.let(getPosts()), (action, posts) => ({
      page: action.payload.page,
      posts
    }))
    .switchMap(({ page, posts }) => {
      return this.postsService.fetchLatestPosts(page)
        .map(res => {
          const isNew = posts.get('pagesViewed').indexOf(page) == -1;
          const isModified = res.status !== 304;

          return this.postActions.fetchLatestPostsSuccess({
            postsData: res.json(),
            page,
            isNew,
            isModified
          });
        })
        .catch(error => Observable.of(this.postActions.fetchLatestPostsFailed(error)))
    });
}
