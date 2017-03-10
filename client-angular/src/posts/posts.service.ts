import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../core';
import { PostsData } from './model/post';
import { POSTS_PATH } from '../constants';


/**
 * Get the posts URL. If a `postsUrl` parameter is passed, it will supercede
 * all else. If no `postsUrl` is passed, then the URL is obtained from the
 * `Configuration` object. Otherwise, it is assumed to be a test, and a dummy
 * URL is used.
 * 
 * @param config the configurtion object
 * @param postsUrl a full url
 */
export function getPostsUrl(config?: Configuration, postsUrl?: string, ): string {
  return postsUrl ? postsUrl : config ? `${config.baseApiUrl}${POSTS_PATH}` : 'testing';
}


@Injectable()
export class PostsService {
  
  constructor(private http: Http, private config: Configuration) {}

  fetchPosts(postsUrl?: string): Observable<PostsData> {
    return this.http.get(getPostsUrl(this.config, postsUrl))
      .map(res => res.json() as PostsData);
  }
}
