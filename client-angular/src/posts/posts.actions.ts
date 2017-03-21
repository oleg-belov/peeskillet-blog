import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { PostsData } from './model/post';


@Injectable()
export class PostsActions {
  static readonly FETCH_LATEST_POSTS = 'FETCH_LATEST_POSTS';
  static readonly FETCH_LATEST_POSTS_SUCCESS = 'FETCH_LATEST_POSTS_SUCCESS';
  static readonly FETCH_LATEST_POSTS_FAILED = 'FETCH_LATEST_POSTS_FAILED';


  fetchLatestPosts(page: number): Action{
    return {
      type: PostsActions.FETCH_LATEST_POSTS,
      payload: { page }
    };
  }

  fetchLatestPostsSuccess(args: FetchLatestPostsSuccessArgs): Action {
    return {
      type: PostsActions.FETCH_LATEST_POSTS_SUCCESS,
      payload: Object.assign({}, args)
    };
  }

  fetchLatestPostsFailed(error: any): Action {
    return {
      type: PostsActions.FETCH_LATEST_POSTS_FAILED,
      payload: error
    }
  }
}

export interface FetchLatestPostsSuccessArgs {
  postsData: PostsData,
  page: number,
  isNew: boolean,
  isModified: boolean
}
