import { Map } from 'immutable';
import { tagsReducer } from './tags.reducer';
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

    it('should store tags in state on receiving posts success action', () => {
      let state = tagsReducer(initialState, postsActions.fetchLatestPostsSuccess(parsedPostsData));

      // 3 tags * 2 posts
      expect(state.size).toEqual(6);

      expectTagWithIdAndName(state, 17, 'mysql');
      expectTagWithIdAndName(state, 8, 'typescript');
      expectTagWithIdAndName(state, 28, 'ionic');
      expectTagWithIdAndName(state, 21, 'websocket');
      expectTagWithIdAndName(state, 10, 'spring-boot');
      expectTagWithIdAndName(state, 31, 'linux');
    });

    function expectTagWithIdAndName(state: Map<any, any>, id: number, name: string) {
      expect(state.get(`http://localhost:8080/api/tags/${id}`)).toBeTruthy();
      expect(state.get(`http://localhost:8080/api/tags/${id}`).name).toEqual(name);
    }
  });
});
