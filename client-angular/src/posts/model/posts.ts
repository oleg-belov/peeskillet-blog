import { Map, Record } from 'immutable';
import { PostData } from './post';
import { PagedData } from '../../shared/pagination';


export interface PostsData extends PagedData {
  _embedded: {
    posts: PostData[]
  }
}

export interface Posts extends Map<string, any> {
  isFetching: boolean;
  pageSize: number;
  totalPages: number;
  totalElements: number;
  currentPage: number;
  pagedPostIds: Map<string, string[]>
}
