import { TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { StoreModule } from '@ngrx/store';

import { Configuration } from '../core';
import { PostsActions } from './posts.actions';
import { PostsEffects } from './posts.effects';
import { postsReducer } from './reducers/posts.reducer';
import { PostsService, getPostsUrl } from './posts.service';
import { HttpTestingModule, postsData } from '../testing';


describe('posts', () => {
  describe('PostsEffects', () => {
    let effects: PostsEffects;
    let actions: PostsActions;
    let runner: EffectsRunner;
    let postsService: PostsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          EffectsTestingModule,
          HttpTestingModule,
          StoreModule.provideStore({
            posts: postsReducer
          })
        ],
        providers: [
          PostsActions,
          PostsEffects,
          PostsService,
          { provide: Configuration, useValue: {}}
        ]
      });

      effects = TestBed.get(PostsEffects);
      actions = TestBed.get(PostsActions);
      runner = TestBed.get(EffectsRunner);
      postsService = TestBed.get(PostsService);
    });

    describe('fetchLatestPosts$', () => {
      it(`should emit ${PostsActions.FETCH_LATEST_POSTS_SUCCESS} action`, fakeAsync(() => {
        spyOnService();

        runner.queue(actions.fetchLatestPosts(getPostsUrl()))

        let action;
        effects.fetchLatestPosts$.subscribe(a => {
          action = a;
        });
        tick();

        expect(action).toEqual(actions.fetchLatestPostsSuccess(postsData));
      }));
    });

    function spyOnService(error = false) {
      spyOn(postsService, 'fetchPosts').and.returnValue(
        error
          ? Observable.throw(new Error('bad things happened'))
          : Observable.of(postsData)
      );
    }
  });
});