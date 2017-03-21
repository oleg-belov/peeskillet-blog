import { EffectsModule } from '@ngrx/effects';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PostsService, getPostsUrl } from './posts.service';
import { PostsActions } from './posts.actions';
import { PostsEffects } from './posts.effects';
import { SharedModule } from '../shared';
import { PostPreviewComponent } from './components/post-preview.component';


export { PostsService, getPostsUrl, PostsActions };
export { Post, PostData, PostRecord, createPost, PostsData } from './model/post';

export { postsReducer, PostsState } from './reducers/posts.reducer';
export { getPosts, getLatestPosts } from './reducers/posts.selectors';


@NgModule({
  imports: [
    SharedModule,
    EffectsModule.run(PostsEffects)
  ],
  declarations: [
    PostPreviewComponent
  ],
  exports: [
    PostPreviewComponent
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
