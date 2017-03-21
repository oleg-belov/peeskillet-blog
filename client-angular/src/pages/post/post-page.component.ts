import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'post-page',
  template: `
    <h1>Page Route {{ (route.params | async)?.postId }}
  `
})
export class PostPageComponent {

  constructor(private route: ActivatedRoute) {}
}
