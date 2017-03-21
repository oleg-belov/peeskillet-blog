import { Map, List, is } from 'immutable';
import { postsReducer } from './posts.reducer';
import { PostsActions } from '../posts.actions';
import { PostsData } from '../model/post';
import { getParsedPostsData, getParsedPostsDataPage2 } from '../../testing'


describe('posts', () => {
  describe('tagsReducer', () => {
    let actions: PostsActions;
    let initialState: Map<any, any>;

    beforeEach(() => {
      actions = new PostsActions();
      initialState = Map();
    });

    it('should merge the state when the action contains "isNew" flag', () => {
      const currentState = Map({
        isFetching: false,
        pageSize: 0,
        totalPages: 0,
        totalElements: 0,
        currentPage: 0,
        pagesViewed: List([4, 5, 6]),
        pagedPostIds: Map<string, List<string>>()
      });

      let postsData = getParsedPostsData();
      let newState = postsReducer(currentState, actions.fetchLatestPostsSuccess({
        postsData,
        page: 0,
        isNew: true,
        isModified: true
      }));

      expect(newState.get('isFetching')).toEqual(false);
      expect(newState.get('pageSize')).toEqual(postsData.page.size);
      expect(newState.get('totalPages')).toEqual(postsData.page.totalPages);
      expect(newState.get('totalElements')).toEqual(postsData.page.totalElements);
      expect(newState.get('currentPage')).toEqual(0);
      expect(is(newState.get('pagesViewed'), List([4, 5, 6, 0]))).toEqual(true);
      expect(is(newState.get('pagedPostIds'), Map({
        "0": ["http://localhost:8080/api/posts/1", "http://localhost:8080/api/posts/2"]
      })));

      postsData = getParsedPostsDataPage2();
      newState = postsReducer(newState, actions.fetchLatestPostsSuccess({
        postsData,
        page: 1,
        isNew: true,
        isModified: true
      }));

      expect(newState.get('currentPage')).toEqual(1);
      expect(is(newState.get('pagesViewed'), List([4, 5, 6, 0, 1]))).toEqual(true);
      expect(is(newState.get('pagedPostIds'), Map({
        "0": ["http://localhost:8080/api/posts/1", "http://localhost:8080/api/posts/2"],
        "1": ["http://localhost:8080/api/posts/3", "http://localhost:8080/api/posts/4"],
      })));
    });

    it('should create new state when the action constians "!isNew" and "isModified" flags', () => {
      const currentState = Map({
        isFetching: false,
        pageSize: 0,
        totalPages: 0,
        totalElements: 0,
        currentPage: 0,
        pagesViewed: List([4, 5, 6]),
        pagedPostIds: Map<string, List<string>>({
          "0": ["http://localhost:8080/api/posts/1", "http://localhost:8080/api/posts/2"],
        })
      });

      const postsData = getParsedPostsDataPage2();
      const newState = postsReducer(currentState, actions.fetchLatestPostsSuccess({
        postsData,
        page: 1,
        isNew: false,
        isModified: true
      }));

      expect(newState.get('isFetching')).toEqual(false);
      expect(newState.get('pageSize')).toEqual(postsData.page.size);
      expect(newState.get('totalPages')).toEqual(postsData.page.totalPages);
      expect(newState.get('totalElements')).toEqual(postsData.page.totalElements);
      expect(newState.get('currentPage')).toEqual(1);
      expect(is(newState.get('pagesViewed'), List([1]))).toEqual(true);
      expect(is(newState.get('pagedPostIds'), Map({
        "1": ["http://localhost:8080/api/posts/3", "http://localhost:8080/api/posts/4"]
      })));
    });

    it('should only change the "currentPage" when action contains "!isNew" and "!isModified"', () => {
      const currentState = Map({
        isFetching: false,
        pageSize: 2,
        totalPages: 10,
        totalElements: 20,
        currentPage: 5,
        pagesViewed: List([4, 5]),
        pagedPostIds: Map<string, List<string>>({
          "4": ["http://localhost:8080/api/posts/100", "http://localhost:8080/api/posts/101"],
          "5": ["http://localhost:8080/api/posts/102", "http://localhost:8080/api/posts/103"]
        })
      });

      const newState = postsReducer(currentState, actions.fetchLatestPostsSuccess({
        postsData: null,
        page: 4,
        isNew: false,
        isModified: false
      }));

      expect(newState.get('isFetching')).toEqual(false);
      expect(newState.get('pageSize')).toEqual(2);
      expect(newState.get('totalPages')).toEqual(10);
      expect(newState.get('totalElements')).toEqual(20);
      expect(newState.get('currentPage')).toEqual(4);
      expect(is(newState.get('pagesViewed'), List([4, 5]))).toEqual(true);
      expect(is(newState.get('pagedPostIds'), Map({
        "4": ["http://localhost:8080/api/posts/100", "http://localhost:8080/api/posts/101"],
        "5": ["http://localhost:8080/api/posts/102", "http://localhost:8080/api/posts/103"]
      })));
    });
  });
});
