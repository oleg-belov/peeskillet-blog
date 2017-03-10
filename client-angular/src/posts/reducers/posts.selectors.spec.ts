import 'rxjs/add/operator/let';

import { TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { getPosts, getLatestPosts } from './posts.selectors';
import { postsReducer } from './posts.reducer';
import { PostsActions } from '../posts.actions';
import { PostsData } from '../model/post';
import { postsData } from '../../testing';


describe('posts', () => {
  describe('posts.selectors', () => {
    let actions: PostsActions;
    let store: Store<any>;
    let parsedPostsData: PostsData = JSON.parse(postsData);

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
      store.dispatch(actions.fetchLatestPostsSuccess(parsedPostsData));
    });

    describe('getLatestPosts()', () => {
      it('should get the latest posts', fakeAsync(() => {
        let posts;
        store.let(getLatestPosts())
          .subscribe(data => {
            posts = data
          });
        tick();

        expect(posts).toBeDefined();
        expect(posts.length).toBe(2);
        expect(posts[0].id).toContain('http://localhost');
        expect(posts[1].id).toContain('http://localhost');
      }));

      it('should get first latest posts', fakeAsync(() => {
        let posts;
        store.let(getLatestPosts(1))
          .subscribe(data => {
            posts = data
          });
        tick();

        expect(posts).toBeDefined();
        expect(posts.length).toBe(1);
      }));
    });
  });
});
