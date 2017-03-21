import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { PostsModule } from '../posts';

import { HomePageComponent } from './home/home-page.component';
import { TagsPageComponent } from './tags/tags-page.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { UsersPageComponent } from './users/users-page.component';
import { PostPageComponent } from './post/post-page.component';
import { appRoutes } from './routes';


@NgModule({
  imports: [
    SharedModule,
    PostsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    HomePageComponent,
    TagsPageComponent,
    ProfilePageComponent,
    UsersPageComponent,
    PostPageComponent
  ],
  exports: [
    HomePageComponent,
    TagsPageComponent,
    ProfilePageComponent,
    UsersPageComponent,
    PostPageComponent
  ]
})
export class PagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PagesModule,
      providers: []
    }
  }
}
