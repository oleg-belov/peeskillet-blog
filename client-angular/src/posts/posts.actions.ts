import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { PostsData } from './model/post';


@Injectable()
export class PostsActions {
  static readonly FETCH_LATEST_POSTS = 'FETCH_LATEST_POSTS';
  static readonly FETCH_LATEST_POSTS_SUCCESS = 'FETCH_LATEST_POSTS_SUCCESS';
  static readonly FETCH_LATEST_POSTS_FAILED = 'FETCH_LATEST_POSTS_FAILED';


  fetchLatestPosts(postsUrl): FetchLatestPostsAction {
    return {
      type: PostsActions.FETCH_LATEST_POSTS,
      payload: { postsUrl }
    };
  }

  fetchLatestPostsSuccess(postsData: any): FetchLatestPostsSucessAction {
    return {
      type: PostsActions.FETCH_LATEST_POSTS_SUCCESS,
      payload: { postsData }
    };
  }

  fetchLatestPostsFailed(error: any): Action {
    return {
      type: PostsActions.FETCH_LATEST_POSTS_FAILED,
      payload: error
    }
  }
}

export interface FetchLatestPostsAction extends Action {
  payload: {
    postsUrl: string;
  }
}

export interface FetchLatestPostsSucessAction extends Action {
  payload: {
    postsData: PostsData
  }
}