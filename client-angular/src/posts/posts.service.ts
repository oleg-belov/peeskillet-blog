import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../app';
import { Configuration } from '../core';
import { PostsData, Post } from './model/post';
import { PostsActions } from './posts.actions';
import { getLatestPosts, getPosts } from './reducers/posts.selectors';
import { POSTS_PATH, POSTS_PAGE_SIZE } from '../constants';


/**
 * Get the posts URL. If a `postsUrl` parameter is passed, it will supercede
 * all else. If no `postsUrl` is passed, then the URL is obtained from the
 * `Configuration` object. Otherwise, it is assumed to be a test, and a dummy
 * URL is used.
 * 
 * @param config the configurtion object
 * @param postsUrl a full url
 */
export function getOldPostsUrl(config?: Configuration, postsUrl?: string, ): string {
  return postsUrl ? postsUrl : config ? `${config.baseApiUrl}${POSTS_PATH}` : 'testing';
}

export function getPostsUrl(config: Configuration, page = 0) {
  return `${config.baseApiUrl}${POSTS_PATH}?page=${page}&size=${POSTS_PAGE_SIZE}`;
}

@Injectable()
export class PostsService {
  posts$;
  latestPosts$;
  
  constructor(private http: Http,
              private config: Configuration,
              private store$: Store<AppState>,
              private postsActions: PostsActions) {
 
    this.posts$ = store$.let(getPosts());
    this.latestPosts$ = store$.let(getLatestPosts());
  }

  fetchLatestPosts(page: number): Observable<Response> {
    return this.http.get(getPostsUrl(this.config, page));
  }

  loadLatestPosts(page: number) {
    this.store$.dispatch(this.postsActions.fetchLatestPosts(page));
  }
}
