import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutModule } from '../layout';
import { PagesModule } from '../pages';
import { SharedModule } from '../shared';
import { CoreModule } from '../core';
import { PostsModule } from '../posts';

import { AppState } from './app.state';


// ****************************
// Development
// ****************************
import { DevModule } from '../dev';


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
    CoreModule.forRoot(),
    PostsModule.forRoot(),

    /* Development */
    DevModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
