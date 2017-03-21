import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Map } from 'immutable';
import { Post } from '../model/post';
import { User } from '../../users';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'post-preview',
  templateUrl: 'post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent {
  @Input() post: Post;
  @Input() user: User;
}
