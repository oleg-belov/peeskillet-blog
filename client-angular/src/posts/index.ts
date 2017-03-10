import { EffectsModule } from '@ngrx/effects';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PostsService, getPostsUrl } from './posts.service';
import { PostsActions, FetchLatestPostsAction, FetchLatestPostsSucessAction } from './posts.actions';
import { PostsEffects } from './posts.effects';


export { PostsService, getPostsUrl, PostsActions, FetchLatestPostsAction, FetchLatestPostsSucessAction };
export { Post, PostData, PostRecord, createPost, PostsData } from './model/post';

export { postsReducer, PostsState } from './reducers/posts.reducer';
export { getPosts, getLatestPosts } from './reducers/posts.selectors';


@NgModule({
  imports: [
    EffectsModule.run(PostsEffects)
  ]
})
export class PostsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PostsModule,
      providers: [
        PostsService,
        PostsActions
      ]
    }
  }
}
