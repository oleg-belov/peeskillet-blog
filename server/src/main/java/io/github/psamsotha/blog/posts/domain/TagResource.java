package io.github.psamsotha.blog.posts.domain;

import io.github.psamsotha.blog.common.domain.AbstractResource;
import org.springframework.hateoas.core.Relation;

/**
 * @author Paul Samsotha.
 */
@Relation(value = "tag", collectionRelation = "tags")
public class TagResource extends AbstractResource<TagResource> {

    private String name;
    private long postCount;

    public String getName() {
        return this.name;
    }

    public TagResource name(String name) {
        this.name = name;
        return this;
    }

    public TagResource postCount(long postCount) {
        this.postCount = postCount;
        return this;
    }
}
