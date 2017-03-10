import 'rxjs/add/operator/map';

import { Component, ViewEncapsulation } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Store } from '@ngrx/store';

import { PostsActions, getPostsUrl } from '../posts';
import { Configuration } from '../core';
import { AppState } from './app.state';


@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

  constructor(private postsActions: PostsActions,
              private store$: Store<AppState>,
              private config: Configuration) {}

  ngOnInit() {
    this.store$.dispatch(this.postsActions.fetchLatestPosts(`${getPostsUrl(this.config)}?page=0&size=5`));
  }
}
