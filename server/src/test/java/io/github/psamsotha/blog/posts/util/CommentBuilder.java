package io.github.psamsotha.blog.posts.util;

import io.github.psamsotha.blog.posts.domain.Comment;
import io.github.psamsotha.blog.posts.domain.Post;
import io.github.psamsotha.blog.users.domain.User;

import java.time.LocalDateTime;

/**
 * @author Paul Samsotha.
 */
public class CommentBuilder {

    private Long id;
    private String content;
    private LocalDateTime dateCreated;
    private Post post;
    private User author;

    public CommentBuilder id(Long id) {
        this.id = id;
        return this;
    }

    public CommentBuilder content(String content) {
        this.content = content;
        return this;
    }

    public CommentBuilder dateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public CommentBuilder post(Post post) {
        this.post = post;
        return this;
    }

    public CommentBuilder author(User author) {
        this.author = author;
        return this;
    }

    public Comment build() {
        Comment comment = new Comment();
        comment.setId(this.id);
        comment.setContent(this.content);
        comment.setDateCreated(this.dateCreated);
        comment.setPost(this.post);
        comment.setAuthor(this.author);
        return comment;
    }
}
