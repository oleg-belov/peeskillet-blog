import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/let';
import 'rxjs/add/observable/combineLatest';

import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../app';
import { PostsActions, getLatestPosts } from '../../posts';
import { getUsers } from '../../users';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  posts$: Observable<any>;

  constructor(private postsActions: PostsActions,
              private store$: Store<AppState>) {}

  ngOnInit() {
    this.posts$ = Observable.combineLatest(
      this.store$.let(getLatestPosts()),
      this.store$.let(getUsers()),
      (posts, users: any) => {
        posts.forEach(post => {
          post.author = users.get(post.authorId)
        })
        return posts;
      }
    )
  }
}
