package io.github.psamsotha.blog.posts.domain;

import io.github.psamsotha.blog.common.domain.AbstractResource;
import io.github.psamsotha.blog.users.domain.UserResource;
import org.springframework.hateoas.PagedResources;
import org.springframework.hateoas.core.Relation;

import java.time.LocalDateTime;
import java.util.List;


/**
 * @author Paul Samsotha.
 */
@Relation(value = "post", collectionRelation = "posts")
public class PostResource extends AbstractResource<PostResource> {

    private String content;
    private LocalDateTime dateCreated;
    private UserResource author;
    private List<TagResource> tags;
    private List<CommentResource> comments;


    public String getContent() {
        return content;
    }

    public PostResource content(String content) {
        this.content = content;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public PostResource dateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public UserResource getAuthor() {
        return author;
    }

    public PostResource author(UserResource author) {
        this.author = author;
        return this;
    }

    public List<TagResource> getTags() {
        return tags;
    }

    public PostResource tags(List<TagResource> tags) {
        this.tags = tags;
        return this;
    }

    public List<CommentResource> getComments() {
        return this.comments;
    }

    public PostResource comments(List<CommentResource> comments) {
        this.comments = comments;
        return this;
    }
}
