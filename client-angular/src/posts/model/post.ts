import { Map, Record } from 'immutable';
import { CommentData } from './comment';
import { TagData } from './tag';
import { UserData } from '../../users';
import { getSelfLink, extractIds } from '../../util';


export interface PostData {
  content: string;
  title: string;
  dateCreated: string;
  author: UserData;
  tags: TagData[];
  comments: CommentData[];
  _links: {
    self: { href: string; };
  };
}

export interface PostsData {
  _embedded: {
    posts: PostData[]
  },
  _links: {
    first: { href: string; };
    self: { href: string; };
    last: { href: string };
    prev?: { href: string };
    next?: { href: string; };
  },
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  }
}

export interface Post extends Map<string, any> {
  id: string;
  dateCreated: Date;
  title: string;
  content: string;
  authorId: string;
  commentIds: string[];
  tagIds: string[];
}

export const PostRecord = Record({
  id: null,
  dateCreated: null,
  title: null,
  content: null,
  authorId: null,
  commentIds: [],
  tagIds: []
});

export function createPost(data: PostData): Post {
  return new PostRecord({

    id: getSelfLink(data),
    dateCreated: new Date(data.dateCreated),
    title: data.title,
    content: data.content,
    authorId: getSelfLink(data.author),
    comments: extractIds(data, 'comments'),
    tagIds: extractIds(data, 'tags')

  }) as Post;
}
