package io.github.psamsotha.blog.posts.domain;

import io.github.psamsotha.blog.common.domain.AbstractResource;
import org.springframework.hateoas.core.Relation;

import java.time.LocalDateTime;

/**
 * @author Paul Samsotha.
 */
@Relation(value = "comment", collectionRelation = "comments")
public class CommentResource extends AbstractResource<CommentResource> {

    private String content;
    private LocalDateTime dateCreated;

    public String getContent() {
        return content;
    }

    public CommentResource content(String content) {
        this.content = content;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public CommentResource dateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
}
