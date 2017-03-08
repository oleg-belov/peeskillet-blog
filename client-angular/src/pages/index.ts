import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { HomePageComponent } from './home/home-page.component';
import { TagsPageComponent } from './tags/tags-page.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { UsersPageComponent } from './users/users-page.component';
import { appRoutes } from './routes';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    HomePageComponent,
    TagsPageComponent,
    ProfilePageComponent,
    UsersPageComponent
  ],
  exports: [
    HomePageComponent,
    TagsPageComponent,
    ProfilePageComponent,
    UsersPageComponent
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
