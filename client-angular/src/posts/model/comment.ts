import { Map, Record } from 'immutable';
import { UserData } from '../../users';
import { getSelfLink } from '../../util';


export interface CommentData {
  content: string;
  dateCreated: string;
  author: UserData;
  _links: {
    self: { href: string };
  };
}


export interface Comment extends Map<string, any> {
  id: number;
  content: string;
  dateCreated: Date;
  authorId: string;
}

export const CommentRecord = Record({
  id: -1,
  content: null,
  dateCreated: null,
  authorId: null
});

export function createComment(data: CommentData): Comment {
  return new CommentRecord({

    id: getSelfLink(data),
    content: data.content,
    dateCreated: new Date(data.dateCreated),
    authorId: getSelfLink(data.author)

  }) as Comment;
}
