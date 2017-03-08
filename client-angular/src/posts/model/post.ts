import { Map, Record } from 'immutable';
import { CommentData } from './comment';
import { UserData } from '../../user';


export interface PostData {
  id: 1,
  date_created: string,
  title: string,
  content: string,
  author: UserData,
  comments: number[]
}

export interface Post extends Map<string, any> {
  id: number;
  dataCreated: string;
  content: string;
  author: string;
  comments: number[]
}

export const PostRecord = Record({
  id: -1,
  dataCreated: null,
  content: null,
  author: null,
  comments: []
});

export function createPost(data: PostData): Post {
  return new PostRecord({

    id: data.id,
    dataCreated: data.date_created,
    content: data.content,
    author: data.author,
    comments: data.comments

  }) as Post;
}
