import { PostsState } from '../posts';
import { CommentsState } from '../comments';
import { TagsState } from '../tags';
import { UsersState } from '../users';


export interface AppState {
  users: UsersState;
  posts: PostsState;
  comments: CommentsState;
  tags: TagsState;
}
