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
import { CoreModule } from '../core';
import { BootstrapModule } from '../shared/bootstrap';

import { postsReducer, commentsReducer, tagsReducer } from '../posts';
import { usersReducer } from '../users';


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
