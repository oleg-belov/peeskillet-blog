package io.github.psamsotha.blog.posts.util;

import io.github.psamsotha.blog.posts.domain.Comment;
import io.github.psamsotha.blog.posts.domain.Post;
import io.github.psamsotha.blog.posts.domain.Tag;
import io.github.psamsotha.blog.users.domain.User;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Paul Samsotha.
 */
public class PostBuilder {

    private Long id;
    private String content;
    private String title;
    private LocalDateTime dateCreated;
    private User author;
    private List<Comment> comments;
    private List<Tag> tags;


    public PostBuilder id(Long id) {
        this.id = id;
        return this;
    }

    public PostBuilder content(String content) {
        this.content = content;
        return this;
    }

    public PostBuilder title(String title) {
        this.title = title;
        return this;
    }

    public PostBuilder dateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public PostBuilder author(User author) {
        this.author = author;
        return this;
    }

    public PostBuilder addComment(Comment comment) {
        if (this.comments == null) {
            this.comments = new ArrayList<>();
        }
        this.comments.add(comment);
        return this;
    }

    public PostBuilder addTag(Tag tag) {
        if (this.tags == null) {
            this.tags = new ArrayList<>();
        }
        this.tags.add(tag);
        return this;
    }

    public Post build() {
        Post post = new Post();
        post.setId(this.id);
        post.setContent(this.content);
        post.setTitle(this.title);
        post.setAuthor(this.author);
        post.setDateCreated(this.dateCreated);
        post.setComments(this.comments);
        post.setTags(this.tags);
        return post;
    }
}
