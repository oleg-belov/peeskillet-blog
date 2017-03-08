import 'rxjs/add/operator/map';

import { Component, ViewEncapsulation } from '@angular/core';
import { Http , Response} from '@angular/http';

import { PostsActions, getPostsUrl } from '../posts';


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

  constructor(private postsActions: PostsActions) {}

  ngOnInit() {
    this.postsActions.fetchLatestPosts(getPostsUrl());
  }
}
