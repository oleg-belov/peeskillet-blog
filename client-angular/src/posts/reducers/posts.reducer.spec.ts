import { Map } from 'immutable';
import { postsReducer } from './posts.reducer';
import { PostsActions } from '../posts.actions';
import { PostsData } from '../model/post';
import { postsData } from '../../testing'


describe('posts', () => {
  describe('tagsReducer', () => {
    let postsActions: PostsActions;
    let initialState: Map<any, any>;
    let parsedPostsData: PostsData = JSON.parse(postsData);

    beforeEach(() => {
      postsActions = new PostsActions();
      initialState = Map();
    });

    it('should store posts in state on receiving posts success action', () => {
      let state = postsReducer(initialState, postsActions.fetchLatestPostsSuccess(parsedPostsData));

      // 2 posts + isFetching + hasLoadedLatest
      expect(state.size).toEqual(4);

      expectPostWithIdAndContent(state, 1, 'mock content 1');
      expectPostWithIdAndContent(state, 2, 'mock content 2');
    });

    function expectPostWithIdAndContent(state: Map<any, any>, id: number, content: string) {
      expect(state.get(`http://localhost:8080/api/posts/${id}`)).toBeTruthy();
      expect(state.get(`http://localhost:8080/api/posts/${id}`).content).toEqual(content);
    }

    it('should set and remove the isFetching flag', () => {
      let state = postsReducer(initialState, postsActions.fetchLatestPosts('someUrl'));
      expect(state.get('isFetching')).toEqual(true);

      state = postsReducer(state, postsActions.fetchLatestPostsSuccess(parsedPostsData));
      expect(state.get('isFetching')).toEqual(false);
    });
  });
});
