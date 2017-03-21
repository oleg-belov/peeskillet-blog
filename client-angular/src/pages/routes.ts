import { Routes } from '@angular/router';


import { HomePageComponent } from './home/home-page.component';
import { TagsPageComponent } from './tags/tags-page.component';
import { UsersPageComponent } from './users/users-page.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { PostPageComponent } from './post/post-page.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/home?page=1', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'tags', component: TagsPageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'profile/:userId', component: ProfilePageComponent },
  { path: 'posts/:postId', component: PostPageComponent }
];
