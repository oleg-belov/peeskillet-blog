import { PostsState, CommentsState, TagsState } from '../posts';
import { UsersState } from '../users';


export interface AppState {
  users: UsersState;
  posts: PostsState;
  comments: CommentsState;
  tags: TagsState;
}
