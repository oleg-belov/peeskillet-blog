package io.github.psamsotha.blog.posts.service;

import io.github.psamsotha.blog.posts.domain.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Paul Samsotha.
 */
public interface TagService {

    Tag createTag(Tag tag);
    Page<Tag> getTags(Pageable pageable);
}
