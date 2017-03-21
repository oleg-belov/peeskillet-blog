import { Map, Record } from 'immutable';
import { TagData } from '../../tags';
import { UserData } from '../../users';
import { CommentData } from '../../comments';
import { PagedData } from '../../shared/pagination';
import { getSelfLink, extractIds, idFromSelfLink } from '../../util';


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

export interface PostsData extends PagedData {
  _embedded: {
    posts: PostData[]
  }
}

export interface Post extends Map<string, any> {
  id: string;
  idNumber: number;
  dateCreated: Date;
  title: string;
  content: string;
  authorId: string;
  commentIds: string[];
  tagIds: string[];
}

export const PostRecord = Record({
  id: null,
  idNumber: -1,
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
    idNumber: idFromSelfLink(getSelfLink(data)),
    dateCreated: new Date(data.dateCreated),
    title: data.title,
    content: data.content,
    authorId: getSelfLink(data.author),
    comments: extractIds(data, 'comments'),
    tagIds: extractIds(data, 'tags')

  }) as Post;
}
