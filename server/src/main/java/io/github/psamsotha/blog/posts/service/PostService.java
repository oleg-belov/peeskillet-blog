package io.github.psamsotha.blog.posts.service;

import io.github.psamsotha.blog.common.exception.NotFoundException;
import io.github.psamsotha.blog.posts.domain.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Paul Samsotha.
 */
public interface PostService {

    Post getById(Long id);

    Post create(Post post);

    Page<Post> getPosts(Pageable pageable);

    Page<Post> getLatestPosts(int count);

    Page<Post> getByTagName(String tagName, Pageable pageable);

    Page<Post> getByAuthorId(Long authorId, Pageable pageable) throws NotFoundException;
}
