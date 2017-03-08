import { normalize, schema } from 'normalizr';
import { usersData, postsData } from './data';

import { PostData } from '../posts';


export const userSchema = new schema.Entity('users', {}, {
  idAttribute: (user) => user.username.toLowerCase()
})

export const commentSchema = new schema.Entity('comments', {
  author: userSchema
})

export const postSchema = new schema.Entity('posts', {
  comments: [commentSchema],
  author: userSchema
})

export const postsSchema = [postSchema]


export function normalizePost(postData: PostData) {
  return normalize(postData, postSchema);
}

// console.log(JSON.stringify(normalize(postsData, postsSchema), null, 2))

