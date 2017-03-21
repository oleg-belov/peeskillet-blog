import { PostsState } from '../posts';
import { CommentsState } from '../comments';
import { TagsState } from '../tags';
import { UsersState } from '../users';
import { Pagination } from '../shared/pagination';


export interface AppState {
  users: UsersState;
  posts: PostsState;
  comments: CommentsState;
  tags: TagsState;

  latestPostsPagination: Pagination;
  currentPostsPage: number;
}
