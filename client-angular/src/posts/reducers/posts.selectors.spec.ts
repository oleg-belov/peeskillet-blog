import 'rxjs/add/operator/let';
import 'rxjs/add/operator/withLatestFrom';

import { is, List } from 'immutable';
import { TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { postsReducer } from './posts.reducer';
import { PostsActions } from '../posts.actions';
import { getParsedPostsData, getParsedPostsDataPage2 } from '../../testing';
import { getPosts, getLatestPosts, getCurrentPage } from './posts.selectors';


describe('posts', () => {
  describe('posts.selectors', () => {
    let actions: PostsActions;
    let store: Store<any>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.provideStore({
            posts: postsReducer
          })
        ],
        providers: [ PostsActions ]
      });

      store = TestBed.get(Store);
      actions = TestBed.get(PostsActions);
    });

    beforeEach(() => {
      store.dispatch(actions.fetchLatestPostsSuccess({
        postsData: getParsedPostsData(),
        page: 0,
        isNew: true,
        isModified: true
      }));
    });

    describe('getPosts()', () => {
      it('should return observable that emits the complete posts state', fakeAsync(() => {
        let count = 0;
        let posts = null;

        store.let(getPosts()).subscribe(data => {
          posts = data;
          count++;
        });

        tick();
        expect(is(posts.get('pagesViewed'), List([0])));
        expect(count).toEqual(1);

        // action changes state
        store.dispatch(actions.fetchLatestPosts(1));
        tick();
        expect(count).toEqual(2);

        // action doesn't affect posts state
        store.dispatch({type: 'UNDEFINED'});
        tick();
        expect(count).toEqual(2);
      }));
    });


    describe('getLatestPosts()', () => {
      it('should return observable that emits the latest posts state', fakeAsync(() => {
        let count = 0;
        let posts = null;
        let latest = null;

        store.let(getPosts()).subscribe(state => {
          posts = state;
        });

        store.let(getLatestPosts()).subscribe(latestPosts => {
          latest = latestPosts;
          count++
        })
        tick();

        expect(latest.size).toBe(2);
        expect(latest.get(0).id).toContain('http://localhost');
        expect(latest.get(1).id).toContain('http://localhost');
        expect(count).toEqual(1);

        // action changes state
        store.dispatch(actions.fetchLatestPostsSuccess({
          postsData: getParsedPostsDataPage2(),
          page: 1,
          isNew: true,
          isModified: true
        }));
        tick();
        expect(count).toEqual(2);
        
        // doesn't change if current page doesn't change
        expect(posts.get('currentPage')).toEqual(1);
        store.dispatch(actions.fetchLatestPostsSuccess({
          postsData: null,
          page: 1,
          isNew: false,
          isModified: false
        }));
        tick();
        expect(count).toEqual(2);

        // action doesn't affect posts state
        store.dispatch({type: 'UNDEFINED'});
        tick();
        expect(count).toEqual(2);
      }));

/*
      it('should get first latest posts', fakeAsync(() => {
        let posts;
        store.let(getLatestPosts())
          .subscribe(data => {
            posts = data
          });
        tick();

        expect(posts).toBeDefined();
        expect(posts.length).toBe(1);
      }));
      */
    });
  
  });
  
});
