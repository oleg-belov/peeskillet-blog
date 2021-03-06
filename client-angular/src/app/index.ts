import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppState } from './app.state';
import { AppComponent } from './app.component';
import { LayoutModule } from '../layout';
import { PagesModule } from '../pages';
import { SharedModule } from '../shared';
import { PostsModule } from '../posts';
import { UsersModule } from '../users';
import { CoreModule } from '../core';
import { BootstrapModule } from '../shared/bootstrap';

import { commentsReducer } from '../comments';
import { tagsReducer } from '../tags';
import { usersReducer } from '../users';
import { postsReducer } from '../posts';


export { AppState };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule.forRoot(),
    PagesModule.forRoot(),
    SharedModule.forRoot(),
    PostsModule.forRoot(),
    CoreModule.forRoot(),
    UsersModule.forRoot(),
    BootstrapModule.forRoot(),

    StoreModule.provideStore({
      // data
      users: usersReducer,
      posts: postsReducer,
      comments: commentsReducer,
      tags: tagsReducer

      // ui
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
