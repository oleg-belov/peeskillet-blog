package io.github.psamsotha.blog.posts.service;

import io.github.psamsotha.blog.common.exception.NotFoundException;
import io.github.psamsotha.blog.posts.domain.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Paul Samsotha.
 */
public interface CommentService {

    Comment getById(Long commentId);

    Page<Comment> getByAuthorId(Long authorId, Pageable pageable) throws NotFoundException;
}
