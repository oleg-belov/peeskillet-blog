import { TestBed, fakeAsync, tick, async, ComponentFixture } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { HomePageComponent } from './home-page.component';
import { postsReducer, PostsActions, PostsData } from '../../posts';
import { usersReducer } from '../../users';
import { postsData } from '../../testing';
import { SharedModule } from '../../shared';

/*
describe('pages', () => {
  describe('HomePageComponent', () => {
    let store: Store<any>;
    let actions: PostsActions;
    let fixture: ComponentFixture<HomePageComponent>;
    let component: HomePageComponent;
    let parsedPostData: PostsData = JSON.parse(postsData);

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          SharedModule,
          StoreModule.provideStore({
            users: usersReducer,
            posts: postsReducer
          })
        ],
        declarations: [
          HomePageComponent,
        ],
        providers: [
          PostsActions
        ]
      });

      store = TestBed.get(Store);
      actions = TestBed.get(PostsActions);
      fixture = TestBed.createComponent(HomePageComponent);
      component = fixture.componentInstance;
    });

    beforeEach(() => {
      store.dispatch(actions.fetchLatestPostsSuccess(parsedPostData));
    });

    it('should create observable with correct data', fakeAsync(() => {
      fixture.detectChanges();
      tick();

      let posts;
      component.posts$.subscribe(data => {
        posts = data;
      });
      tick();

      expect(posts).toBeDefined();
      expect(posts.length).toBe(2);

      expectCorrectPostStructure(posts, 0);
      expectCorrectPostStructure(posts, 1);
    }));

    function expectCorrectPostStructure(posts, index) {
      expect(posts[index].id).toBeDefined();
      expect(posts[index].title).toBeDefined();
      expect(posts[index].content).toBeDefined();
      expect(posts[index].author).toBeDefined();
      expect(posts[index].author.username).toBeDefined();
      expect(posts[index].author.avatarUrl).toBeDefined();
    }
  });
});

*/