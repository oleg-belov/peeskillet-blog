package io.github.psamsotha.blog.posts.repository;

import io.github.psamsotha.blog.posts.domain.Post;
import io.github.psamsotha.blog.posts.domain.Tag;
import io.github.psamsotha.blog.users.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Paul Samsotha.
 */

public interface PostRepository extends JpaRepository<Post, Long> {

    Page<Post> findByAuthor(User user, Pageable pageable);

    Page<Post> findByTags(Tag tag, Pageable pageable);
}
