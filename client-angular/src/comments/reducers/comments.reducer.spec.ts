import { Map } from 'immutable';
import { commentsReducer } from './comments.reducer';
import { postsData } from '../../testing';
import { PostsData, PostsActions } from '../../posts';


describe('posts', () => {
  describe('commentsReducer', () => {
    let postsActions: PostsActions;
    let initialState: Map<any, any>;
    let parsedPostsData: PostsData = JSON.parse(postsData);

    beforeEach(() => {
      postsActions = new PostsActions();
      initialState = Map();
    });

    it('should store comments in state on receiving posts success action', () => {
      let state = commentsReducer(initialState, postsActions.fetchLatestPostsSuccess(parsedPostsData));

      // 3 comments * 2 posts
      expect(state.size).toEqual(6);

      expectCommentWithIdAndContent(state, 1, 'You are the man!');
      expectCommentWithIdAndContent(state, 101, 'Good stuff.');
      expectCommentWithIdAndContent(state, 201, 'Great! I owe you a beer.');
      expectCommentWithIdAndContent(state, 2, 'Awesome article!');
      expectCommentWithIdAndContent(state, 102, 'Great! I owe you a beer.');
      expectCommentWithIdAndContent(state, 202, 'Great! I owe you a beer.');
    });

    function expectCommentWithIdAndContent(state: Map<any, any>, id: number, content: string) {
      expect(state.get(`http://localhost:8080/api/comments/${id}`)).toBeTruthy();
      expect(state.get(`http://localhost:8080/api/comments/${id}`).content).toEqual(content);
    }
  });
});
