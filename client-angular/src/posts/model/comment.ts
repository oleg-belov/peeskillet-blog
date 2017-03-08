import { Map, Record } from 'immutable';
import { UserData } from '../../user';


export interface CommentData {
  id: number;
  content: string;
  author: UserData;
}

export interface Comment extends Map<string, any> {
  id: number;
  content: string;
  author: string;
}

export const CommentRecord = Record({
  id: -1,
  content: null,
  author: null
});

export function createComment(data: CommentData): Comment {
  return new CommentRecord({

    id: data.id,
    content: data.content,
    author: data.author.username

  }) as Comment;
}
