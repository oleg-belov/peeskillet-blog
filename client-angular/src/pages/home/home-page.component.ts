import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/combineLatest';

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../app';
import { UsersService } from '../../users';
import { PaginationService } from '../../shared/pagination';
import { PostsService, PostsActions } from '../../posts';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private posts: PostsService,
              private users: UsersService,
              private pagination: PaginationService,
              private postsActions: PostsActions,
              private store$: Store<AppState>,
              private route: ActivatedRoute,
              private router: Router) {

      const { page } = route.snapshot.queryParams;
      console.log(`initial page: ${page}`)

      this.fetchPostsData(page);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(({ page }) => {
      this.fetchPostsData(page)
    });
  }

  onPageChange(selectedPage: number) {
    console.log(selectedPage);
    this.router.navigate(['/home'], {queryParams: {page: selectedPage}});
    setTimeout(function(){
     // window.scrollTo(0, 1);
    }, 0);
  }

  private fetchPostsData(page: string = '1') {
    this.posts.loadLatestPosts(+page - 1);
  }
}
