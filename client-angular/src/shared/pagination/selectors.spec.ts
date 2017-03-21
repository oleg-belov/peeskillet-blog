import 'rxjs/add/operator/let';

import { is } from 'immutable';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { PostsActions } from '../../posts';
import { PaginationType, getPagination } from './selectors';
import { PaginationRecord, Pagination } from './pagination';
import { getParsedPostsData } from '../../testing';

/*
describe('shared', () => {
  describe('pagination', () => {
    describe('selectors', () => {
      let actions: PostsActions;
      let store: Store<any>;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            StoreModule.provideStore({
              latestPostsPagination: lastestPostsPaginationReducer
            })
          ],
          providers: [
            PostsActions
          ]
        });

        actions = TestBed.get(PostsActions);
        store = TestBed.get(Store);
      });


      describe('getPagination(latestPostsPagination)', () => {
        it('should return obsevable that emits latest post pagination', fakeAsync(() => {
          let state: Pagination;

          store.let(getPagination('latestPostsPagination'))
            .subscribe(data => {
              state = data;
            });
          tick();

          expect(is(state, new PaginationRecord()));

          store.dispatch(actions.fetchLatestPostsSuccess(getParsedPostsData()));
          tick();

          expect(state.selfLink).toEqual('http://localhost:8080/api/posts');
        }));
      });
    });
  });
});
*/
