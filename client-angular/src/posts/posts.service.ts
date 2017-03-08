import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../core';
import { PostData } from './model/post';
import { POSTS_PATH } from '../constants';
import { normalizePost } from '../data';


export function getPostsUrl(postsUrl?: string, baseApiUrl?: string): string {
  return postsUrl ? postsUrl : `${baseApiUrl}${POSTS_PATH}`;
}


@Injectable()
export class PostsService {
  
  constructor(private http: Http, private config: Configuration) {}

  fetchPosts(postsUrl?: string): Observable<any> {
    return this.http.get(getPostsUrl(postsUrl, this.config.baseApiUrl))
      .map(res => normalizePost(res.json()));
  }
}
