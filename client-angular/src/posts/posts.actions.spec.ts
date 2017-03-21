import { PostsActions } from './posts.actions';
import { getPostsUrl } from './posts.service';
import { PostsData } from './model/post';
import { getParsedPostsData } from '../testing';


describe('posts', () => {
  describe('PostsActions', () => {
    let actions: PostsActions;
    let parsedPostData: PostsData = getParsedPostsData();

    beforeEach(() => {
      actions = new PostsActions();
    });

    describe(`${PostsActions.FETCH_LATEST_POSTS} action`, () => {
      it('should return action', () => {
        expect(actions.fetchLatestPosts(1)).toEqual({
          type: PostsActions.FETCH_LATEST_POSTS,
          payload: { page: 1 }
        });
      });
    });

    describe(`${PostsActions.FETCH_LATEST_POSTS_SUCCESS} action`, () => {
      it('should return action', () => {
        expect(actions.fetchLatestPostsSuccess({
          postsData: parsedPostData,
          page: 0,
          isNew: true,
          isModified: true
        })).toEqual({
          type: PostsActions.FETCH_LATEST_POSTS_SUCCESS,
          payload: {
            postsData: parsedPostData,
            page: 0,
            isNew: true,
            isModified: true
          }
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

