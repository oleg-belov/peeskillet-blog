package io.github.psamsotha.blog.posts.util;

import io.github.psamsotha.blog.posts.domain.Tag;

/**
 * @author Paul Samsotha.
 */
public class TagBuilder {

    private Long id;
    private String name;
    private Long postCount;

    public TagBuilder id(Long id) {
        this.id = id;
        return this;
    }

    public TagBuilder name(String name) {
        this.name = name;
        return this;
    }

    public TagBuilder postCount(Long postCount) {
        this.postCount = postCount;
        return this;
    }

    public Tag build() {
        Tag tag = new Tag();
        tag.setId(this.id);
        tag.setName(this.name);
        tag.setPostCount(this.postCount);
        return tag;
    }
}
