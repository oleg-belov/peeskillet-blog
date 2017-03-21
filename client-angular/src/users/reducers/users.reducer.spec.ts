import { Map } from 'immutable';
import { UserRecord } from '../model/user';
import { usersReducer } from './users.reducer';
import { UsersActions } from '../users.actions';
import { PostsActions, PostsData } from '../../posts';
import { postsData, userData } from '../../testing';

/*
describe('users', () => {
  describe('usersReducer', () => {
    let postsActions: PostsActions;
    let usersActions: UsersActions;
    let initialState: Map<any, any>;
    let parsedPostsData: PostsData = JSON.parse(postsData);

    beforeEach(() => {
      postsActions = new PostsActions();
      usersActions = new UsersActions();
      initialState = Map();
    });

    it('should store users in state on receiving posts success action', () => {
      let state = usersReducer(initialState, postsActions.fetchLatestPostsSuccess(parsedPostsData));

      // 1 post user and 4 comment users
      expect(state.size).toEqual(5);
      expectUserWithIdAndUsername(state, 1, 'peeskillet');
      expectUserWithIdAndUsername(state, 3, 'blackmamba');
      expectUserWithIdAndUsername(state, 4, 'babyface');
      expectUserWithIdAndUsername(state, 9, 'shaqdiesel');
      expectUserWithIdAndUsername(state, 8, 'thebeard');
    });

    function expectUserWithIdAndUsername(state: Map<any, any>, id: number, username: string) {
      expect(state.get(`http://localhost:8080/api/users/${id}`)).toBeTruthy();
      expect(state.get(`http://localhost:8080/api/users/${id}`).username).toEqual(username);
    }
  });
});
*/