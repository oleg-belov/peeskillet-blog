package io.github.psamsotha.blog.posts.repository;

import io.github.psamsotha.blog.posts.domain.Comment;
import io.github.psamsotha.blog.users.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Paul Samsotha.
 */
public interface CommentRepository extends JpaRepository<Comment, Long> {

    Page<Comment> findByAuthor(User user, Pageable pageable);
}
