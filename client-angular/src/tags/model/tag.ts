import { Map, Record } from 'immutable';
import { getSelfLink } from '../../util';


export interface TagData {
  name: string;
  postCount: number;
  _links: {
    self: { href: string; };
  };
}

export interface Tag extends Map<string, any> {
  id: string;
  name: string;
  postCount: number;
}

export const TagRecord = Record({
  id: null,
  name: null,
  postCount: -1
});

export function createTag(data: TagData): Tag {
  return new TagRecord({

    id: getSelfLink(data),
    name: data.name,
    postCount: data.postCount

  }) as Tag;
}
