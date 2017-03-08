"use strict";
var normalizr_1 = require('normalizr');
var data_1 = require('./data');
exports.userSchema = new normalizr_1.schema.Entity('users', {}, {
    idAttribute: function (user) { return user.username.toLowerCase(); }
});
exports.commentSchema = new normalizr_1.schema.Entity('comments', {
    author: exports.userSchema
});
exports.postSchema = new normalizr_1.schema.Entity('posts', {
    comments: [exports.commentSchema],
    author: exports.userSchema
});
exports.postsSchema = [exports.postSchema];
console.log(JSON.stringify(normalizr_1.normalize(data_1.postsData, exports.postsSchema), null, 2));
