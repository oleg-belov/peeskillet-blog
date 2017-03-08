import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/let';

import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../app';
import { PostsActions, getPosts } from '../../posts';


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
    this.posts$ = this.store$
      .let(getPosts());
  }
}
