import { EffectsModule } from '@ngrx/effects';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PostsService, getPostsUrl } from './posts.service';
import { PostsActions, FetchLatesPostsAction, FetchLatestPostsSucessAction } from './posts.actions';
import { PostsEffects } from './posts.effects';


export { PostsService, getPostsUrl, PostsActions };
export { Post, PostData, PostRecord, createPost } from './model/post';
export { PostsState } from './reducers/posts.reducer';
export { getPosts } from './reducers/selectors';


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
