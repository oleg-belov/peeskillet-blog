import { PostsActions } from './posts.actions';
import { getPostsUrl } from './posts.service';
import { PostsData } from './model/post';
import { postsData } from '../testing';


describe('posts', () => {
  describe('PostsActions', () => {
    let actions: PostsActions;
    let parsedPostData: PostsData;

    beforeEach(() => {
      actions = new PostsActions();
    });

    describe(`${PostsActions.FETCH_LATEST_POSTS} action`, () => {
      it('should return action', () => {
        expect(actions.fetchLatestPosts(getPostsUrl())).toEqual({
          type: PostsActions.FETCH_LATEST_POSTS,
          payload: { postsUrl: getPostsUrl() }
        });
      });
    });

    describe(`${PostsActions.FETCH_LATEST_POSTS_SUCCESS} action`, () => {
      it('should return action', () => {
        expect(actions.fetchLatestPostsSuccess(parsedPostData)).toEqual({
          type: PostsActions.FETCH_LATEST_POSTS_SUCCESS,
          payload: { postsData: parsedPostData }
        });
      });
    });

    describe(`${PostsActions.FETCH_LATEST_POSTS_FAILED} action`, () => {
      it('should return action', () => {
        let error = 'error';
        expect(actions.fetchLatestPostsFailed(error)).toEqual({
          type: PostsActions.FETCH_LATEST_POSTS_FAILED,
          payload: error
        });
      });
    });
  });
});
